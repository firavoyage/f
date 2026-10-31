const [folder, ...path_parts] = 'drafts/foo bar/sadf'.split('/')

const path = path_parts.join('/')

log(folder, path)