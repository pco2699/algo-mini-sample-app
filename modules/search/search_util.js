const contents = [
  'ジャニーズコンサート 2019/08/07',
  'サカナクション NF in MIDNIGHT SONIC 2019/08/16',
  '山下達郎 全国ツアー 2019/08/07',
  '宇多田ヒカル Laughter in the dark 2018/11/07',
  '椎名林檎 （生）林檎博 2018/11/25'
]

const ticketGenerator = (num) => {
  const tickets = []
  for (let i = 1; i <= num; i++) {
    tickets.push({
      id: i,
      content: contents[Math.floor(Math.random() * contents.length)]
    })
  }
  return tickets
}

export default ticketGenerator
