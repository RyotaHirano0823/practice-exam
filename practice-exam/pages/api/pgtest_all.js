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

    // ������SQL�����s�����B
    const { rows: results } = await client.query('select id, name from mondaiset')
    // �������̏ꍇ�́A���̂܂�results��ݒ�B1�����Ƃ킩���Ă���ꍇ��[0]
    res.status(200).json(results)
}