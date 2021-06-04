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

    // ������SQL�����s�����B���L�̗�́A���ݎ���
    const { rows: results } = await client.query('select ms.mondaibun, m.text from mondai as ms inner join sentakusi as m on ms.id = m.mondaiset_id')
    // �������̏ꍇ�́A���̂܂�results��ݒ�B1�����Ƃ킩���Ă���ꍇ��[0]
    res.status(200).json(results[0])
}