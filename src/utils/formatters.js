import {v1 as uuid} from "uuid"

export const formatPlayingCard = data => ({
  id: uuid(),
  image: data.cards[0].image,
})

export const formatPokemon = data => ({
  id: uuid(),
  front: data.sprites.front_default,
  back: data.sprites.back_default,
  name: data.name,
  stats: data.stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }))
})

