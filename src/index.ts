import { version } from 'package.json';
import { instrument } from 'soundfont-player';

/** アサート関数。 */
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val == null) { throw new Error(`Expected 'val' to be defined, but received ${val}`); }
}

/** 絶対にDOM見つけてくるマン。 */
const querySelector = <T extends Element>(token: string, root: ParentNode = document) => {
  const dom = root.querySelector<T>(token);
  assertIsDefined(dom);
  return dom;
};

const actionButtonOnClick = async (_: MouseEvent) => {
  const player = await instrument(new AudioContext(), 'music_box');
  player.play('C3',  0);
  player.play('Db3', 1);
  player.play('D3',  2);
  player.play('Eb3', 3);
  player.play('E3',  4);
  player.play('F3',  5);
  player.play('Gb3', 6);
  player.play('G3',  7);
  player.play('Ab3', 8);
  player.play('A3',  9);
  player.play('Bb3', 10);
  player.play('B3',  11);
};

/** 起動。 */
addEventListener('load', () => {
  querySelector<HTMLElement>('#version').textContent = version;
  querySelector<HTMLButtonElement>('#form [name=action]').onclick = actionButtonOnClick;
});
