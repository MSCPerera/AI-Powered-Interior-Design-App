import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_CMhb6pPZ8caS@ep-lingering-scene-a4fg9ocp-pooler.us-east-1.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
