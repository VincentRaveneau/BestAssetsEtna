const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const app = express()
const bodyParser = require('body-parser')
const { TreeRepository } = require('typeorm')
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite'
})

const User = sequelize.define('User', {
  Login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  Has_voted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false
  },
})

const Assets = sequelize.define('Assets', {
  Login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nb_votes: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: false
  }
})

async function createUser(login) {
  if (login === null) {
      console.error("Merci de renseigner tout les champs: prenom, nom, email et mdp");
      return
  }
  return await User.create({ Login: login, Has_voted: false });
}

async function getUsers(login) {
  const user = await User.findOne({ where: { Login: login } })
  return user
}

async function getAssets() {
  const asset = await Assets.findAll()
  return asset
}

async function get_specific_asset(login) {
  const asset = await Assets.findOne({where: {Login: login}})
  if (!asset)
    throw ("asset not found")
  return asset
}

async function vote_for_asset(login, asset) {
  const user = await User.findOne({ where: { Login: login } })
  const voted = await Assets.findOne({ where: { Login: asset } })

  if (user.Has_voted == true)
    throw ("User already voted")
  else {
    User.update( { Has_voted : true}, { where : { Login : login } })
    Assets.update( { nb_votes : voted.nb_votes + 1}, { where : { Login: asset } })
    return
  }
}

async function startServer() {
  await sequelize.sync();
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/register', async (req, res) => {
    console.log(req.body.Login);
    try {
        console.log(req.body);
        await createUser(req.body.Login);
        res.send(`Successfully added :)`);
    } catch (e) {
        return res.sendStatus(401);
    }
  })

  app.get('/users/:login', async (req, res) => {
    const { login } = req.params;
    try {
        if (!login) {
            res.send("Please enter a login");
            return
        }
        const user = await getUsers(login);
        if (!user)
            return res.sendStatus(400)
        res.send(user);
    } catch (e) {
        res.send(e);
    }
  })

  app.get('/assets', async (req, res) => {
    try {
      if (!req.params)
        res.send(getAssets())
      else
        res.send(get_specific_asset(req.params))
    } catch (e) {
      res.send(e)
    }
  })

  app.post('/vote', async (req, res) => {
    try {
      if (!req.body.Login || !req.body.Asset) {
        res.send("Missing arg").sendStatus(404);
        return
      } else {
        await vote_for_asset(req.body.Login, req.body.Asset);
      }
    } catch (e) {
      res.send(e);
    }
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}

startServer();