/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index' // 基础模块
import platformModules from 'web/runtime/modules/index' // 平台相关模块

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

// 类似高阶函数，做了函数柯里化，为了满足不同平台和模块的需求，一次性搞定平台和模块的差异，不用写一堆if else
export const patch: Function = createPatchFunction({ nodeOps, modules }) 
