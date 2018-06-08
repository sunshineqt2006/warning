export const isArray = Array.isArray

export function setTitle(title) {
  if (!title) return
  document.title = title;
  if (isIOS()) {
      let i = document.createElement('iframe')
      i.src = 'http://m.baidu.com/favicon.ico'
      i.style.display = 'none'
      i.onload = () => {
          setTimeout(() => i.remove(), 9)
      }
      document.body.appendChild(i)
  }
}

export function isIOS() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (/iphone/.test(ua)) {
      return true;
  } else {
      return false;
  }
}

export function merge (target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      const sourceProperty = source[property]
      if (typeof sourceProperty === 'object') {
        target[property] = merge(target[property], sourceProperty)
        continue
      }
      target[property] = sourceProperty
    }
  }
  return target
}