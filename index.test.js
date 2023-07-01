const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');
//define global restaurant
let restaurant

//define global menu
let menu

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        restaurant = await Restaurant.create(seedRestaurant[0])
        menu = await Menu.create(seedMenu[0])
    });

    test('Restaurant has a name', async () => {
        // TODO - write test
        expect(restaurant).toHaveProperty('name')
    });
    test('Menu has a title', async () => {
        // TODO - write test
        expect(menu).toHaveProperty('title')
    });

    // test('can find Restaurants', async () => {
    //     // TODO - write test
    //     expect(await Restaurant.findByPk(1)).toEqual(seedRestaurant[0])
    // });

    // test('can find Menus', async () => {
    //     // TODO - write test
    //     expect( await Menu.findByPk(1)).toEqual(seedMenu[0])
    // });

    test('can delete Restaurants', async () => {
        // TODO - write test
        let destroyedR = await Restaurant.destroy({
            where: {
                name: 'AppleBees'
            }
        })
        expect(destroyedR).toEqual(1)
    });
})