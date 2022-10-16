const baseURL = "https://instantes-drf-api.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk":7,
                "username":"Jemma",
                "email":"",
                "first_name":"",
                "last_name":"",
                "profile_id":7,
                "profile_image":"https://res.cloudinary.com/darmodjdz/image/upload/v1/media/../avatar_profile_dywli5"
            }));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];