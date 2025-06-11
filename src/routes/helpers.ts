export const pathsPublic: { [k: string]: string } = {
    home: '/',
    login: '/login',
    productDetail: '/product/:idOeSlug',
    cart: '/cart',
};

export const pathsPrivate: { [k: string]: string } = {
    accountSettings: '/account-settings',
    favorites: '/favorites',
};
export const paths: { [k: string]: string } = Object.assign(
    {},
    pathsPublic,
    pathsPrivate
);
export const checkPathMatch = (
    pathname: string,
    paths: { [k: string]: string }
) => {
    let isMatch = false;
    const allPaths = Object.keys(paths).map((key) => {
        return paths[key];
    });
    const pathFirstSection = pathname.split('/')[1];
    allPaths.forEach((path) => {
        if (path.slice(1) === pathFirstSection) {
            return (isMatch = true);
        }
    });

    return isMatch;
};
