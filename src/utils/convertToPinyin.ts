const PINYINS: Record<string, string> = {
  负: 'fù',
  点: 'diǎn',
  零: 'líng',
  一: 'yī',
  二: 'èr',
  三: 'sān',
  四: 'sì',
  五: 'wǔ',
  六: 'liù',
  七: 'qī',
  八: 'bā',
  九: 'jiǔ',
  十: 'shí',
  百: 'bǎi',
  千: 'qiān',
  万: 'wàn',
}

export default function (numString: string) {
  return numString
    .split('')
    .map((n) => PINYINS[n])
    .join(' ')
}
