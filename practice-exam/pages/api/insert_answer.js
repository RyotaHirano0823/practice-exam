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
    const { rows: results } = await client.query('UPDATE public.answer set answer.kaitou_sentakuid = 1 where answer.id == 1')
    // 複数県の場合は、そのままresultsを設定。1件だとわかっている場合は[0]
    res.status(200).json(results)
  }