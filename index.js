import { fromHtml } from "hast-util-from-html"
import { toHtml } from "hast-util-to-html"
import { findAndReplace } from 'hast-util-find-and-replace'
import { map } from 'unist-util-map'
import fetch from 'node-fetch'


const html = await fetch('https://en.wikipedia.org/wiki/Elon_Musk').then(res => res.text())
const tree = fromHtml(html)

const newTree = map(tree, node => {
  if (node.type === 'element' && node.tagName === 'a') {
    //console.log(node)
    node.properties.href = '#cool-man'
    return node
  }
  return node
})

const xhtml = toHtml(tree)
// save new html as an html file
console.log(xhtml)
