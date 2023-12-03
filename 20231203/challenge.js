function findNaughtyStep(original, modified) {
  const emptyOriginal = (original ??= '').length == 0
  const emptyModified = (modified ??= '').length == 0
  if ( emptyOriginal && emptyModified ) {
    return '';
  }

  if (emptyOriginal && !emptyModified) {
    return modified[0]
  }

  if (!emptyOriginal && emptyModified) {
    return original[0]
  }
  
  original = original.split('').sort();
  modified = modified.split('').sort();

  if (original.length > modified.length) {
    for (let i = 0; i < original.length; i++) {
      if (original[i] != modified[i]) {
        return original[i]
      }
    }
  }

  if (original.length < modified.length) {
    for (let i = 0; i < modified.length; i++) {
      if (original[i] != modified[i]) {
        return modified[i]
      }
    }
  }

  if (original.length == modified.length) {
    for (let i = 0; i < modified.length; i++) {
      if (original[i] != modified[i]) {
        return modified[i]
      }
    }
  }
  

  return ''
}

export default findNaughtyStep;
