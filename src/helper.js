const createChild = (parentObj, childType, childClass) => {
  const childObj = document.createElement(childType);

  let classes =
    typeof childClass === 'string' ? childClass.split(/\s+/) : childClass;

  classes.forEach((cls) => {
    if (cls.length > 0) {
      childObj.classList.add(cls);
    }
  });

  return childObj;
};

const prependChild = (parentObj, childType, childClass = '') => {
  const childObj = createChild(parentObj, childType, childClass);
  parentObj.prepend(childObj);
  return childObj;
};

const appendChild = (parentObj, childType, childClass = '') => {
  const childObj = createChild(parentObj, childType, childClass);
  parentObj.appendChild(childObj);
  return childObj;
};

export { prependChild, appendChild };
