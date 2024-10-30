// Charger les configurations du projet
import 'dotenv/config';
import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

// Créer le serveur
const app = express();

// Ajout de middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());
app.use(express.static('public')); 



// Démarrer le serveur
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Serveur démarré: http://localhost:${PORT}`);
});
