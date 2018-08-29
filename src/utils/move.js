const move = array => {
    const clone = [...array];
    clone.push(clone.shift());
    return clone;
};

export default move;
