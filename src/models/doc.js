import { nanoid } from 'nanoid'

import { decrypt, encrypt } from '#root/src/common/crypto/crypto'
import { parseTags, parseTasks, parseHeaders } from '#root/src/common/parsers'

class Doc {
  constructor(attributes = {}) {
    this.id = attributes.id || nanoid()
    this.text = attributes.text || ''
    this.textKey = attributes.textKey || null
    this.daily = attributes.daily || false
    this.iv = attributes.iv || null
    this.encrypted = attributes.encrypted || false
    this.createdAt = attributes.createdAt || new Date()
    this.updatedAt = attributes.updatedAt || new Date()
    this.touchedAt = attributes.touchedAt || new Date()
    this.discardedAt = attributes.discardedAt || null

    this.headers = this.encrypted ? [] : parseHeaders(this.text)
    this.tags = this.encrypted ? [] : parseTags(this.text)
    this.tasks = this.encrypted ? [] : parseTasks(this.text)

    // api params
    this.firebaseId = attributes.firebaseId || null
    this.ownerId = attributes.ownerId || null
    this.syncedAt = attributes.syncedAt || null
    this.public = attributes.public || false

    // version params
    this.originalId = attributes.originalId || null
    this.parentId = attributes.parentId || null
  }

  discard() {
    this.updatedAt = new Date()
    this.touchedAt = new Date()
    this.discardedAt = new Date()
  }

  duplicate() {
    return new Doc({ text: this.text })
  }

  merge(attributes) {
    // id is not writable
    Object.assign(this, attributes, { id: this.id })
  }

  restore() {
    this.updatedAt = new Date()
    this.touchedAt = new Date()
    this.discardedAt = null
  }

  restrict() {
    this.public = false
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }

  share() {
    this.public = true
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }

  touch() {
    this.touchedAt = new Date()
  }

  update({ text }) {
    this.text = text
    this.headers.splice(0, this.headers.length, ...parseHeaders(text))
    this.tags.splice(0, this.tags.length, ...parseTags(text))
    this.tasks.splice(0, this.tasks.length, ...parseTasks(text))
    this.updatedAt = new Date()
    this.touchedAt = new Date()
  }
}

export const pack = async (doc, { preferEncryption = null, publicKey = null }) => {
  const packed = Object.assign({}, {
    ...doc,
    // These values are derived from the text, so we don't need to store them.
    headers: [],
    tags: [],
    tasks: [],
  })

  // Guard against encryption edge cases.
  if (preferEncryption && publicKey && !doc.encrypted && !doc.public) {
    const { cipher, cipherKey, iv } = await encrypt({ data: packed.text, publicKey })

    return Object.assign({}, packed, {
      encrypted: true,
      iv: iv,
      text: cipher,
      textKey: cipherKey,
    })
  }

  return Object.assign({}, packed)
}

export const unpack = async (packed, { privateKey }) => {
  try {
    const prepared = {
      ...packed,
      id: packed.id || packed.clientId,
      textKey: packed.textKey || packed.dataKey,
    }

    if (privateKey && prepared.encrypted) {
      const text = await decrypt({ cipher: prepared.text, cipherKey: prepared.textKey, iv: prepared.iv, privateKey })

      return new Doc(
        Object.assign({}, prepared, {
          encrypted: false,
          text: text,
        })
      )
    }
  } catch (error) {
    // suppress decryption errors and load encrypted document
    console.error(error)
  }

  return new Doc(packed)
}

export default Doc
