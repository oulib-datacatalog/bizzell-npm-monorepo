const Koa = require('koa')
const fs = require('fs-extra')
const route = require('koa-route')
const path = require('path')

function unwrapStream(stream) {
  return new Promise((resolve, reject) => {
    const data = []
    stream.on('data', chunk => {
      if (chunk instanceof Buffer) {
        data.push(chunk.toString('utf8'))
      } else {
        data.push(chunk)
      }
    })
    stream.once('end', () => {
      const allData = data.join('')
      if (allData === '' || allData === undefined) {
        resolve(undefined)
      } else {
        try {
          resolve(JSON.parse(allData))
        } catch (err) {
          reject(err)
        }
      }
    })
    stream.on('error', err => reject(err))
  })
}

exports.startServer = function(port, projectPath) {
  const app = new Koa()

  app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    ctx.set(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    )
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    if (ctx.method === 'OPTIONS') {
      ctx.status = 200
    } else {
      await next()
    }
  })

  app.use(
    route.post('/edit/:file', async (ctx, file) => {
      fs.ensureFileSync(path.join('.', projectPath, 'static', `${file}.json`))
      fs.writeFileSync(
        path.join('.', projectPath, 'static', `${file}.json`),
        JSON.stringify(await unwrapStream(ctx.req)),
      )
      ctx.status = 200
    }),
  )

  app.use(ctx => {
    ctx.status = 404
    ctx.body = JSON.stringify({
      error: 'This is not the endpoint you are looking for',
    })
  })

  app.listen(port)
}
