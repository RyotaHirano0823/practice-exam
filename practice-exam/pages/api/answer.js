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

    // 選択した選択肢を取得
    const { rows: results } = await client.query('SELECT answer.id,answer.kaitou_sentakuid from public.answer order by answer.id')
    // 複数県の場合は、そのままresultsを設定。1件だとわかっている場合は[0]
    res.status(200).json(results)
  }