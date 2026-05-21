import fastify from "fastify";
import app from "./app";
import 'dotenv/config'
const main = fastify({ logger: true })
main.register(app)

const start = async () => {
    try {
       // تأكد إن أمر listen مش بيشتغل لو إحنا على Vercel
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  main.listen({ port: 5000 }, (err, address) => {
    if (err) {
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });
}

// ومهم جداً يكون الملف بيعمل export للتطبيق في الآخر عشان Vercel يشوفه
    } catch (err) { return err }
}
start()
module.exports = main;