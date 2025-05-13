import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query

      const tasks = database.select('tasks', search ?{
        title: search,
        description: search,
      } : null)

      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      }

      database.insert('tasks', task)

      return res.writeHead(201).end()
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body
      let taskExist = database.select('tasks', { id })

      
      if (taskExist.length === 0) {
        return res.writeHead(404).end(JSON.stringify({ error: 'Task not found.'}))
      }

      taskExist = taskExist[0]
      
      const taskUpdate = {
        ...taskExist,
        title: title ?? taskExist.title,
        description: description ?? taskExist.description,
        updated_at: new Date()
      }

      database.update('tasks', id, taskUpdate)
      
      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      const taskExist = database.select('tasks', { id })

      if (taskExist.length === 0) {
        return res.writeHead(404).end(JSON.stringify({ error: 'Task not found.'}))
      }
      
      database.delete('tasks', id)
      
      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params
      
      let taskExist = database.select('tasks', {id})

      if (taskExist.length === 0) {
        return res.writeHead(404).end(JSON.stringify({ error: 'Task not found.'}))
      }

      taskExist = taskExist[0]

      database.update('tasks', id, {
        ...taskExist,
        completed_at: taskExist.completed_at ? null : new Date(),
        updated_at: new Date(),
      })
      
      return res.writeHead(204).end()
    }
  }
]