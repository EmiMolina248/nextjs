import Head from 'next/head'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        
        {/* <form class="row login-form col-sm-12"action="/test"method="post">
            <br />
            <h3 class="header-title">ID de persona por favor del 0 a 5</h3>
                <div class="form-group">
                  <label for="id"></label>
                    <input name="id"type="text"class="form-control"placeholder="Ingrese id"/>
                </div>
                <div class="form-group">
                  <button type="submit"class="btn btn-primary btn-block">
                    confirm
                  </button>
              </div>
        </form> */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
