const { Router } = require('express')
const { Firestore } = require('@google-cloud/firestore')

const router = Router()
const db = new Firestore()

router.get('/', async (req, res, next) => {
  try {
    const tasksSnapshot = await db.collection('tasks').get()
    const tasks = []
    tasksSnapshot.forEach((task) => {
      tasks.push({ id: task.id, ...task.data() })
    })
    res.json(tasks)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) throw new Error('Id is blank')
    const task = await db.collection('tasks').doc(id).get()
    if (!task.exists) throw new Error('Task does not exists')
    res.json({ id: task.id, ...task.data() })
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const title = req.body.title
    if (!title) throw new Error('Title is blank')
    const description = req.body.description || ''
    const color = req.body.color || 'white'
    const createdAt = Date.now()
    const updatedAt = null
    const data = { title, description, color, createdAt, updatedAt }
    const ref = await db.collection('tasks').add(data)
    res.json({ id: ref.id, ...data })
  } catch (e) {
    next(e)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) throw new Error('Id is blank')
    const title = req.body.title
    const description = req.body.description || ''
    const color = req.body.color || 'white'
    const updatedAt = Date.now()
    const data = { title, description, color, updatedAt }
    await db.collection('tasks').doc(id).set(data, { merge: true })
    res.json({ id, ...data })
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id) throw new Error('Id is blank')
    await db.collection('tasks').doc(id).delete()
    res.json({ id })
  } catch (e) {
    next(e)
  }
})

module.exports = router
