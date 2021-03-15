import axios from "axios";

export default {
    state:{
        filter: {
            additional: [
                {
                    slug: 'price',
                    name: 'Цена (sum)',
                    type: 'slider',
                    min: 200,
                    max: 20001,
                    value:[200, 20001]
                },
                {
                    slug: 'memory',
                    name: 'Память (GB)',
                    type: 'slider',
                    min: 2,
                    max: 512,
                    value:[2, 512],

                },
                {
                    slug: 'waterproofness',
                    name: 'Водонепроницаемость',
                    type: 'toggle',
                    value:[0],
                },
                {
                    slug: 'material',
                    type: 'multi',
                    name: 'Материалы для мебели',
                    options: [
                        {
                            id: 4,
                            slug: 'massivdrevesini',
                            name: 'Массив древесины',
                            active: false,
                        },
                        {
                            id: 5,
                            slug: 'pliti',
                            name: 'Плиты древесно-стружечные (ДСП/ЛДСП)',
                            active: false,
                        },
                        {
                            id: 6,
                            slug: 'mdf',
                            name: 'МДФ',
                            active: false,
                        }
                    ]
                },
            ],
            attributes: [
                {
                    slug: 'color',
                    type: 'multi',
                    name: 'Цвета',
                    options: [
                        {
                            id: 1,
                            slug: 'red',
                            name: 'Крассный',
                            value: '#e05d5d',
                            active: false,
                        },
                        {
                            id: 2,
                            slug: 'green',
                            name: 'Зеленый',
                            value: '#6cee6c',
                            active: false,
                        },
                        {
                            id: 3,
                            slug: 'blue',
                            name: 'Синий',
                            value: '#6d6de3',
                            active: false,
                        }
                    ]
                },
                {
                    slug: 'actii',
                    name: 'Акции',
                    type: 'toggle',
                    value:[0],
                },
                {
                    slug: 'price2',
                    name: 'Вес (кг)',
                    type: 'slider',
                    min: 0,
                    max: 99999,
                    value:[0, 99999]
                },
                {
                    slug: 'size',
                    type: 'multi',
                    name: 'Размеры',
                    options: [
                        {
                            id: 4,
                            slug: 'sz_xl',
                            name: 'XL',
                            active: false,
                        },
                        {
                            id: 5,
                            slug: 'sz_l',
                            name: 'L',
                            active: false,
                        },
                        {
                            id: 6,
                            slug: 'sz_s',
                            name: 'S',
                            active: false,
                        }
                    ]
                },
                {
                    slug: 'discount',
                    type: 'single',
                    name: 'Скидка',
                    options: [
                        {
                            id: 7,
                            slug: 'discount_10',
                            name: 'от 10% и выше',
                            active: false,
                        },
                        {
                            id: 8,
                            slug: 'discount_30',
                            name: 'от 30% и выше',
                            active: false,
                        },
                        {
                            id: 9,
                            slug: 'discount_50',
                            name: 'от 50% и выше',
                            active: false,
                        }
                    ]
                },
            ],
            categories: {
                type: 'single',
                name: 'Катекории',
                slug: 'categories',
                parent: {
                    id: 14,
                    slug: 'smartfoni',
                    name: 'Смартфоны и телефоны',
                    active: true,
                } || null,
                children: [
                    {
                        id: 10,
                        slug: 'smartfoni',
                        name: 'Смартфоны',
                        has_children: true,
                        active: false,
                    },
                    {
                        id: 11,
                        slug: 'bittexnika',
                        name: 'Быт. техника',
                        has_children: false,
                        active: false,
                    },
                    {
                        id: 12,
                        slug: 'dlyasada',
                        name: 'Для сада',
                        has_children: false,
                        active: false,
                    }
                ]
            },
            sorting:{
                type: "single",
                name: "Сртировка",
                slug: "sorting",
                options: [
                    {
                        slug: 'po_popularnosti',
                        name: 'По популярности',
                        active: false,
                    },
                    {
                        slug: 'po_cene',
                        name: 'По цене ↓',
                        active: false,
                    },
                    {
                        slug: 'po_reytingu',
                        name: 'По рейтингу',
                        active: false,
                    },
                    {
                        slug: 'po_cene',
                        name: 'По цене ↑',
                        active: false,
                    }
                ]
            }
        },
        filters: {
            additional:[
                {
                    type: 'slider',
                    slug: "price",
                    values: [100, 44444],
                    options_ids: null
                },
                {
                    type: 'toggle',
                    slug: "waterproofness",
                    values: null,
                    options_ids: [1]
                }
            ] || null,
            attributes:[
                {
                    type: 'multi',
                    slug: "color",
                    values: null,
                    options_ids: [1, 2, 5]
                },
                {
                    type: 'single',
                    slug: "discount",
                    values: null,
                    options_ids: [1]
                },
                {
                    type: 'multi',
                    slug: "material",
                    values: null,
                    options_ids: [1, 2, 5]
                },
            ] || null,
            category_id: 1 || null,
        }
    },
    mutations:{
        setFilter(state, filter){
            state.filter = filter
        }
    },
    actions: {
        async getFilterInfo({commit}, obj){
            await axios.get(`${process.env.VUE_APP_API_URL+obj}`)
            commit("setFilter")
        }
    },
    getters:{
        getFilter: s => s.filter
    }
}
