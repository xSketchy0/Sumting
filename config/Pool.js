import pg from 'pg'
import { db } from './db.js'

// Creates a new Pool
const Pool = new pg.Pool(db)

export default Pool
