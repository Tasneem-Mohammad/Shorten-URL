const sessionIdtouserMap  = new Map();

export function setUser(id , user){
    sessionIdtouserMap.set(id , user)
}
export function getUser(id){
    return sessionIdtouserMap.get(id);
}

