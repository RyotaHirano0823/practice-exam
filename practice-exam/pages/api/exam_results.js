import { Client } from 'pg'

export default async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '7895123zxc',
        port: 5432
    })
    client.connect()

    // 書いたSQLが実行される。
    const { rows: results } = await client.query('update answer set kaitou_sentakuid = 10 where id = 1')
    // 複数県の場合は、そのままresultsを設定。1件だとわかっている場合は[0]
    res.status(200).json(results)
}