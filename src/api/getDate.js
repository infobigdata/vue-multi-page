import * as treeList from './data/tree'
import * as searchList from './data/search'
import * as tpl from './data/template'

const setpromise = data => {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export const treeListData = () => setpromise(treeList.tree);
export const searchListData = () => setpromise(searchList.search);

export const getTpl = () => setpromise(tpl.template);
