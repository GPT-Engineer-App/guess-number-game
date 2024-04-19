# guess-number-game

写一个猜数字的游戏，
## 游戏的规则

1. 电脑随机生成一个1-100之间的数字
2. 玩家来猜这个数字，电脑会提示玩家一些提示，比如["比这个数大得多", "比这个数大一点", "比这个数小得多", "比这个数小一点","很接近了"]
3. 玩家可以一直猜，直到猜中为止，然后可以重来。
4. 电脑会记录玩家猜的次数，然后给出一个评价，比如["天才", "聪明", "加油哦", "你是不是在瞎猜啊"]

## 界面设计

1. 自己渲染一个数字键盘，让玩家输入数字，然后上面有OK按钮，还有一个显示区域，显示电脑的提示，还有一个按钮，点击后可以重置游戏。
2. 游戏结束后，显示玩家猜的次数，然后给出评价。

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/guess-number-game.git
cd guess-number-game
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
