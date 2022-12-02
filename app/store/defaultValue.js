import { ConstString } from '../Strings';

export const defaultValue = [
  {
    id: 1,
    restaurant: 'Restaurant Westerner',
    category: ConstString.WESTERN,
    address: 'No.19 Jalan Kasim Gorilla',
    description: 'Founded in 1999 we strive to serve authentic western cuisine to Malaysian',
    rate: 4.6,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/d9/57/69/spaghetti-western-steakhouse.jpg',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Steak',
        price: '15.00',
        desc: 'A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried.',
        image: 'https://i.pinimg.com/originals/86/32/1d/86321d62549d4659fff9ade7c90a2ebb.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Salad',
        price: '15.00',
        desc: 'a cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients.',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      },
      {
        name: 'Mini Sandwiches',
        price: '5.00',
        desc: 'Open your palette with delicious sandwiches',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2018/12/French-Pressed-Sandwich-Bites-wide1.jpg',
        category: ConstString.APPETIZER

      },
      {
        name: 'Mee Tarik',
        price: '10.00',
        desc: 'Lamian is a type of soft wheat flour Chinese noodle that is particularly common in northern China. Lamian is made by twisting, stretching and folding the dough into strands, using the weight of the dough',
        image: 'https://b.zmtcdn.com/data/pictures/chains/7/18194757/31ce36015ee4a5344c76ba4bde404bde_featured_v2.jpg?fit=around|750:500&crop=750:500;*,*',
        category: ConstString.MAINDISH

      },
      {
        name: 'Green Tea',
        price: '5.00',
        desc: 'Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas.',
        image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320540/herbal-green-tea-being-poured-from-teapot-into-cup.jpg',
        category: ConstString.DRINKS

      },
      {
        name: 'Yellow Tea',
        price: '5.00',
        desc: 'Yellow tea offers a mellow flavor that is similar to green tea. It does not have the grassy smell associated with green tea and the yellow tea leaves',
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/yarrow-tea-1296x728-header-1296x728.jpg?w=1155&h=1528',
        category: ConstString.DRINKS
      },
      {
        name: 'Honey',
        price: '5.00',
        desc: 'Honey Dew',
        image: 'https://1.bp.blogspot.com/--2Nk3kS7LIc/XBCpLVvuHTI/AAAAAAAAXTM/xSvyGrni-hUEkPe7YJF9QuY2vRx7hz2zQCLcBGAs/s1600/Screenshot_20181212-094805_Instagram.jpg',
        category: ConstString.DRINKS
      },
      {
        name: 'Muffins',
        price: '5.00',
        desc: 'Its A Dangerous Muffin',
        image: 'https://thumbs.gfycat.com/RemorsefulMildIndianringneckparakeet-max-1mb.gif',
        category: ConstString.MAINDISH
      },
      {
        name: 'Side Muffins',
        price: '5.00',
        desc: 'Its A Muffin',
        image: 'https://www.xpresszoom.com/wp-content/uploads/job-manager-uploads/main_image/2020/12/74682697_125478965535935_6286918680584388608_n.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Make Sure to Hide Muffins',
        price: '5.00',
        desc: 'Its A Blueberry Muffin',
        image: 'https://i0.wp.com/www.happinessishomemade.net/wp-content/uploads/2016/11/Bakery-Style-Blueberry-Muffins.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Chicken Tika Masala',
        price: '12.00',
        desc: 'Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in a spiced sauce. The sauce is usually creamy and orange-coloured',
        image: 'https://www.thecookingcollective.com.au/wp-content/uploads/2021/08/finished-tikka-masala-with-vegetables-and-roti-bread.jpg',
        category: ConstString.MAINDISH

      },
      {
        name: 'Salad',
        price: '15.00',
        desc: 'a cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients.',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Chapati',
        price: '5.00',
        desc: 'Chapati, also known as roti, rotli, safati, shabaati, phulka, chapo, and roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg/1200px-2_Chapati_warm_and_ready_to_be_eaten.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Kaapi',
        price: '5.00',
        desc: 'Freshly Roasted & Brewed in Melbourne, our blends are crafted in small batches championing the finest Indian coffees and the traditional brewing technique',
        image: 'https://foodandroad.com/wp-content/uploads/2021/04/indian-filter-coffee-kaapi-2.jpg',
        category: ConstString.DRINKS

      },
      {
        name: 'Gulab Jamun',
        price: '5.00',
        desc: 'Gulab jamun is a sweet confectionary or dessert, originating in the Indian subcontinent and a type of mithai popular in India',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2018/09/Gulab-Jamun-Indian-Sweet-500x500.jpg',
        category: ConstString.DESSERT
      },
      {
        name: 'Laksa Sarawak',
        price: '5.00',
        desc: 'Sarawak laksa is primarily composed of thin rice vermicelli noodles, shredded chicken, thin beaten egg omelette strips, boiled shrimp',
        image: 'https://www.mstar.com.my/image/830/553?url=https%3A%2F%2Fclips.mstar.com.my%2Fimages%2Fblob%2F09A99952-D60E-4C99-968A-D45630832E99',
        category: ConstString.MAINDISH

      },
      {
        name: 'Mee Kolok',
        price: '5.00',
        desc: 'Mee kolo or kolok mee is Malaysian dish of dry noodles tossed in a savoury pork and shallot mixture, topped off with fragrant fried onions originated from the state of Sarawak, characteristically light and tossed in a transparent sauce',
        image: 'https://cf.shopee.com.my/file/61d05df9bc9e4b60702231ea16963cf6',
        category: ConstString.MAINDISH

      },
      {
        name: 'Keropok Lekor',
        price: '5.00',
        desc: 'Staple Malaysian Food Lekor, keropok lekor or fish sausage is a traditional Malay fish cracker snack originating from the state of Terengganu',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Keropok_lekor_in_Terengganu%2C_Malaysia.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Pisang Goreng',
        price: '5.00',
        desc: 'A banana fritter is a fritter made by deep frying battered banana or plantain in hot oil. It is a common dish across Southeast Asia',
        image: 'https://www.196flavors.com/wp-content/uploads/2021/06/pisang-goreng-1fp.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Kek Lapis Sarawak',
        price: '5.00',
        desc: 'The Sarawak layer cake, known as kek lapis Sarawak or kek lapis moden Sarawak in Malay, is a layered cake from the state of Sarawak in Malaysia. This cake can be found almost everywhere in the Malaysian state of Sarawak. Usually Kek Lapis Sarawak will be served on special occasions',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqJ-pNovKKPgRlcJ0OSeOihoWiKXIUEoVzWW7mTod_NMHB3oAVdAt29rMR0jWWuhUXMo&usqp=CAU',
        category: ConstString.DESSERT,

      },
      {
        name: 'Steak',
        price: '15.00',
        desc: 'A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried.',
        image: 'https://i.pinimg.com/originals/86/32/1d/86321d62549d4659fff9ade7c90a2ebb.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      }, {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      },
      {
        name: 'Fish N Chips',
        price: '15.00',
        desc: 'Fish and chips is a popular hot dish consisting of fried fish in crispy batter, served with chips. The dish originated in England',
        image: 'https://www.foodadvisor.my/attachments/8f4453ca28396b9ea08ecf65a75f9596f8268637/store/fill/800/500/816f0c9e486c1dc9d74ce0ea5805be1840638012c540d95a3352ccc7b764/featured_image.jpg',
        category: ConstString.MAINDISH
      },
      {
        name: 'Lasagna',
        price: '13.00',
        desc: 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets.',
        image: 'https://static.toiimg.com/thumb/55369113.cms?imgsize=392784&width=800&height=800',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Salad',
        price: '15.00',
        desc: 'a cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients.',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Black Coffee',
        price: '4.00',
        desc: 'Coffee is a drink prepared from roasted coffee beans, seeds of the Coffea plant species.',
        image: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg?resize=1536,922',
        category: ConstString.DRINKS
      },
      {
        name: 'Chocolate Lava Cake',
        price: '6.00',
        desc: 'Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a soufflé. Its name derives from the dessert\'s liquid chocolate center',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/1/WU0701H_Molten-Chocolate-Cakes_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485880987811.jpeg',
        category: ConstString.DESSERT
      },
      {
        name: 'Mini Sandwiches',
        price: '5.00',
        desc: 'Open your palette with delicious sandwiches',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2018/12/French-Pressed-Sandwich-Bites-wide1.jpg',
        category: ConstString.APPETIZER

      },
      {
        name: 'Mee Tarik',
        price: '10.00',
        desc: 'Lamian is a type of soft wheat flour Chinese noodle that is particularly common in northern China. Lamian is made by twisting, stretching and folding the dough into strands, using the weight of the dough',
        image: 'https://b.zmtcdn.com/data/pictures/chains/7/18194757/31ce36015ee4a5344c76ba4bde404bde_featured_v2.jpg?fit=around|750:500&crop=750:500;*,*',
        category: ConstString.MAINDISH

      },
      {
        name: 'Green Tea',
        price: '5.00',
        desc: 'Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas.',
        image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320540/herbal-green-tea-being-poured-from-teapot-into-cup.jpg',
        category: ConstString.DRINKS

      },
      {
        name: 'Yellow Tea',
        price: '5.00',
        desc: 'Yellow tea offers a mellow flavor that is similar to green tea. It does not have the grassy smell associated with green tea and the yellow tea leaves',
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/yarrow-tea-1296x728-header-1296x728.jpg?w=1155&h=1528',
        category: ConstString.DRINKS
      },
      {
        name: 'Honey',
        price: '5.00',
        desc: 'Honey Dew',
        image: 'https://1.bp.blogspot.com/--2Nk3kS7LIc/XBCpLVvuHTI/AAAAAAAAXTM/xSvyGrni-hUEkPe7YJF9QuY2vRx7hz2zQCLcBGAs/s1600/Screenshot_20181212-094805_Instagram.jpg',
        category: ConstString.DRINKS
      },
      {
        name: 'Muffins',
        price: '5.00',
        desc: 'Its A Dangerous Muffin',
        image: 'https://thumbs.gfycat.com/RemorsefulMildIndianringneckparakeet-max-1mb.gif',
        category: ConstString.MAINDISH
      },
      {
        name: 'Side Muffins',
        price: '5.00',
        desc: 'Its A Muffin',
        image: 'https://www.xpresszoom.com/wp-content/uploads/job-manager-uploads/main_image/2020/12/74682697_125478965535935_6286918680584388608_n.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Make Sure to Hide Muffins',
        price: '5.00',
        desc: 'Its A Blueberry Muffin',
        image: 'https://i0.wp.com/www.happinessishomemade.net/wp-content/uploads/2016/11/Bakery-Style-Blueberry-Muffins.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Chicken Tika Masala',
        price: '12.00',
        desc: 'Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in a spiced sauce. The sauce is usually creamy and orange-coloured',
        image: 'https://www.thecookingcollective.com.au/wp-content/uploads/2021/08/finished-tikka-masala-with-vegetables-and-roti-bread.jpg',
        category: ConstString.MAINDISH

      },
      {
        name: 'Salad',
        price: '15.00',
        desc: 'a cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients.',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Chapati',
        price: '5.00',
        desc: 'Chapati, also known as roti, rotli, safati, shabaati, phulka, chapo, and roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg/1200px-2_Chapati_warm_and_ready_to_be_eaten.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Kaapi',
        price: '5.00',
        desc: 'Freshly Roasted & Brewed in Melbourne, our blends are crafted in small batches championing the finest Indian coffees and the traditional brewing technique',
        image: 'https://foodandroad.com/wp-content/uploads/2021/04/indian-filter-coffee-kaapi-2.jpg',
        category: ConstString.DRINKS

      },
      {
        name: 'Gulab Jamun',
        price: '5.00',
        desc: 'Gulab jamun is a sweet confectionary or dessert, originating in the Indian subcontinent and a type of mithai popular in India',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2018/09/Gulab-Jamun-Indian-Sweet-500x500.jpg',
        category: ConstString.DESSERT
      },
      {
        name: 'Laksa Sarawak',
        price: '5.00',
        desc: 'Sarawak laksa is primarily composed of thin rice vermicelli noodles, shredded chicken, thin beaten egg omelette strips, boiled shrimp',
        image: 'https://www.mstar.com.my/image/830/553?url=https%3A%2F%2Fclips.mstar.com.my%2Fimages%2Fblob%2F09A99952-D60E-4C99-968A-D45630832E99',
        category: ConstString.MAINDISH

      },
      {
        name: 'Mee Kolok',
        price: '5.00',
        desc: 'Mee kolo or kolok mee is Malaysian dish of dry noodles tossed in a savoury pork and shallot mixture, topped off with fragrant fried onions originated from the state of Sarawak, characteristically light and tossed in a transparent sauce',
        image: 'https://cf.shopee.com.my/file/61d05df9bc9e4b60702231ea16963cf6',
        category: ConstString.MAINDISH

      },
      {
        name: 'Keropok Lekor',
        price: '5.00',
        desc: 'Staple Malaysian Food Lekor, keropok lekor or fish sausage is a traditional Malay fish cracker snack originating from the state of Terengganu',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Keropok_lekor_in_Terengganu%2C_Malaysia.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Pisang Goreng',
        price: '5.00',
        desc: 'A banana fritter is a fritter made by deep frying battered banana or plantain in hot oil. It is a common dish across Southeast Asia',
        image: 'https://www.196flavors.com/wp-content/uploads/2021/06/pisang-goreng-1fp.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Kek Lapis Sarawak',
        price: '5.00',
        desc: 'The Sarawak layer cake, known as kek lapis Sarawak or kek lapis moden Sarawak in Malay, is a layered cake from the state of Sarawak in Malaysia. This cake can be found almost everywhere in the Malaysian state of Sarawak. Usually Kek Lapis Sarawak will be served on special occasions',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqJ-pNovKKPgRlcJ0OSeOihoWiKXIUEoVzWW7mTod_NMHB3oAVdAt29rMR0jWWuhUXMo&usqp=CAU',
        category: ConstString.DESSERT,

      },
    ]
  },
  {

    restaurant: 'Bombay Palace',
    category: ConstString.INDIAN,
    address: 'No.19 Jalan Kasim Babun',
    description: 'Bombay Palace Restaurant is an international group of Fine Dining North Indian Cuisine Restaurants.',
    rate: 4.6,
    image: 'https://b.zmtcdn.com/data/pictures/8/2800008/91cdc3b07793f87665fef7fc52162cbf.jpg',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Chicken Tika Masala',
        price: '12.00',
        desc: 'Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in a spiced sauce. The sauce is usually creamy and orange-coloured',
        image: 'https://www.thecookingcollective.com.au/wp-content/uploads/2021/08/finished-tikka-masala-with-vegetables-and-roti-bread.jpg',
        category: ConstString.MAINDISH

      },
      {
        name: 'Salad',
        price: '15.00',
        desc: 'a cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing and sometimes accompanied by meat, fish, or other ingredients.',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Chapati',
        price: '5.00',
        desc: 'Chapati, also known as roti, rotli, safati, shabaati, phulka, chapo, and roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg/1200px-2_Chapati_warm_and_ready_to_be_eaten.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Kaapi',
        price: '5.00',
        desc: 'Freshly Roasted & Brewed in Melbourne, our blends are crafted in small batches championing the finest Indian coffees and the traditional brewing technique',
        image: 'https://foodandroad.com/wp-content/uploads/2021/04/indian-filter-coffee-kaapi-2.jpg',
        category: ConstString.DRINKS

      },
      {
        name: 'Gulab Jamun',
        price: '5.00',
        desc: 'Gulab jamun is a sweet confectionary or dessert, originating in the Indian subcontinent and a type of mithai popular in India',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2018/09/Gulab-Jamun-Indian-Sweet-500x500.jpg',
        category: ConstString.DESSERT
      },
    ]
  },
  {

    restaurant: 'Mohd Chan Restaurant',
    category: ConstString.CHINESE,
    address: 'No.19 Jalan Kasim Babun',
    description: 'Restaurant Mohd Chan - An all-Malaysian restaurant chain that delivers delightful comfort food at neighbourhood & friendly prices.',
    rate: 4.1,
    image: 'https://i.pinimg.com/originals/03/64/5f/03645ffe29ad1debd4ec86ff149cd307.gif',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Mee Tarik',
        price: '10.00',
        desc: 'Lamian is a type of soft wheat flour Chinese noodle that is particularly common in northern China. Lamian is made by twisting, stretching and folding the dough into strands, using the weight of the dough',
        image: 'https://b.zmtcdn.com/data/pictures/chains/7/18194757/31ce36015ee4a5344c76ba4bde404bde_featured_v2.jpg?fit=around|750:500&crop=750:500;*,*',
        category: ConstString.MAINDISH

      },
      {
        name: 'Green Tea',
        price: '5.00',
        desc: 'Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas.',
        image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320540/herbal-green-tea-being-poured-from-teapot-into-cup.jpg',
        category: ConstString.DRINKS

      },
      {
        name: 'Yellow Tea',
        price: '5.00',
        desc: 'Yellow tea offers a mellow flavor that is similar to green tea. It does not have the grassy smell associated with green tea and the yellow tea leaves',
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/yarrow-tea-1296x728-header-1296x728.jpg?w=1155&h=1528',
        category: ConstString.DRINKS
      },
    ]
  },
  {

    restaurant: 'Kedai Makan Moksu',
    category: ConstString.MALAY,
    address: 'No.19 Jalan Kasim Babun',
    description: 'Founded in 1999 we strive to serve Tradisional Malaysian cuisine to Malaysian',
    rate: 4.1,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Nasi Ayam',
        price: '5.00',
        desc: 'Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually with cucumber garnishes',
        image: 'https://img-global.cpcdn.com/recipes/e239ece3add2b0e4/1280x1280sq70/photo.webp',
        category: ConstString.MAINDISH

      },
      {
        name: 'Keropok Lekor',
        price: '5.00',
        desc: 'Staple Malaysian Food Lekor, keropok lekor or fish sausage is a traditional Malay fish cracker snack originating from the state of Terengganu',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Keropok_lekor_in_Terengganu%2C_Malaysia.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Pisang Goreng',
        price: '5.00',
        desc: 'A banana fritter is a fritter made by deep frying battered banana or plantain in hot oil. It is a common dish across Southeast Asia',
        image: 'https://www.196flavors.com/wp-content/uploads/2021/06/pisang-goreng-1fp.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Akok',
        price: '5.00',
        desc: 'Akok is one of the famous traditional food in Kelantan and Terengganu, Malaysia.',
        image: 'https://1.bp.blogspot.com/-yCMUg8TTpqw/XqKBRAgab3I/AAAAAAAAiYk/A-pnbXVpA7oWdWhLGPUBCCNnWOQA5uxYACLcBGAsYHQ/s640/Resepi%2BKuih%2BAkok%2BKelantan.jpg',
        category: ConstString.DESSERT
      },
    ]
  },
  {

    restaurant: 'Kedai Dayang Sarawak',
    category: ConstString.BORNEO,
    address: 'No.19 Jalan Kasim Babun',
    description: 'Founded in 1999 we strive to serve Authentic Sarawakian cuisine to Malaysian',
    rate: 4.1,
    image: 'https://4.bp.blogspot.com/-Vxairv_g_yw/W2qHkgMqyaI/AAAAAAAAFGw/p0AF-NMFxAMcH-u-B0WeWzV6xKMjF4u2gCLcBGAs/s1600/20180807_212831.jpg',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Laksa Sarawak',
        price: '5.00',
        desc: 'Sarawak laksa is primarily composed of thin rice vermicelli noodles, shredded chicken, thin beaten egg omelette strips, boiled shrimp',
        image: 'https://www.mstar.com.my/image/830/553?url=https%3A%2F%2Fclips.mstar.com.my%2Fimages%2Fblob%2F09A99952-D60E-4C99-968A-D45630832E99',
        category: ConstString.MAINDISH

      },
      {
        name: 'Mee Kolok',
        price: '5.00',
        desc: 'Mee kolo or kolok mee is Malaysian dish of dry noodles tossed in a savoury pork and shallot mixture, topped off with fragrant fried onions originated from the state of Sarawak, characteristically light and tossed in a transparent sauce',
        image: 'https://cf.shopee.com.my/file/61d05df9bc9e4b60702231ea16963cf6',
        category: ConstString.MAINDISH

      },
      {
        name: 'Keropok Lekor',
        price: '5.00',
        desc: 'Staple Malaysian Food Lekor, keropok lekor or fish sausage is a traditional Malay fish cracker snack originating from the state of Terengganu',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Keropok_lekor_in_Terengganu%2C_Malaysia.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Pisang Goreng',
        price: '5.00',
        desc: 'A banana fritter is a fritter made by deep frying battered banana or plantain in hot oil. It is a common dish across Southeast Asia',
        image: 'https://www.196flavors.com/wp-content/uploads/2021/06/pisang-goreng-1fp.jpg',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Kek Lapis Sarawak',
        price: '5.00',
        desc: 'The Sarawak layer cake, known as kek lapis Sarawak or kek lapis moden Sarawak in Malay, is a layered cake from the state of Sarawak in Malaysia. This cake can be found almost everywhere in the Malaysian state of Sarawak. Usually Kek Lapis Sarawak will be served on special occasions',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqJ-pNovKKPgRlcJ0OSeOihoWiKXIUEoVzWW7mTod_NMHB3oAVdAt29rMR0jWWuhUXMo&usqp=CAU',
        category: ConstString.DESSERT,

      },
    ]
  },
  {

    restaurant: 'Sushi King',
    category: ConstString.JAPANESE,
    address: 'No.19 Jalan Kasim Babun',
    description: 'Founded in 1999 we strive to serve Authentic Japanese cuisine for ALL to enjoy',
    rate: 4.1,
    image: 'https://sushi-king.com/wp-content/uploads/2017/05/100th-outlet-600-x-350.jpg',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Sushi',
        price: '5.00',
        desc: 'Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice", also referred to as shari, or sumeshi. ',
        image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528',
        category: ConstString.MAINDISH

      },
      {
        name: 'Onigiri',
        price: '5.00',
        desc: 'Onigiri, also known as omusubi, nigirimeshi, or rice ball, is a Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in nori. ',
        image: 'https://allwaysdelicious.com/wp-content/uploads/2012/12/onigiri-hero-1-720x540.jpg',
        category: ConstString.MAINDISH

      },
      {
        name: 'Keropok Lekor',
        price: '5.00',
        desc: 'Staple Malaysian Food Lekor, keropok lekor or fish sausage is a traditional Malay fish cracker snack originating from the state of Terengganu',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Keropok_lekor_in_Terengganu%2C_Malaysia.jpg',

        category: ConstString.SIDEDISH
      },
      {
        name: 'Pisang Goreng',
        price: '5.00',
        desc: 'A banana fritter is a fritter made by deep frying battered banana or plantain in hot oil. It is a common dish across Southeast Asia',
        image: 'https://www.196flavors.com/wp-content/uploads/2021/06/pisang-goreng-1fp.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Kek Lapis Sarawak',
        price: '5.00',
        desc: 'The Sarawak layer cake, known as kek lapis Sarawak or kek lapis moden Sarawak in Malay, is a layered cake from the state of Sarawak in Malaysia. This cake can be found almost everywhere in the Malaysian state of Sarawak. Usually Kek Lapis Sarawak will be served on special occasions',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqJ-pNovKKPgRlcJ0OSeOihoWiKXIUEoVzWW7mTod_NMHB3oAVdAt29rMR0jWWuhUXMo&usqp=CAU',
        category: ConstString.DESSERT

      },
    ]
  },
  {

    restaurant: 'Cat Cafe',
    category: 'Drinks',
    address: 'No.19 Jalan Kasim Babun',
    description: 'Potable liquid, especially one other than water, as tea, coffee, beer, or milk: The price of the meal includes a beverage.',
    rate: 4.1,
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/24f89969530077.5b84d93a88cb0.gif',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Muffins',
        price: '5.00',
        desc: 'Its A Muffin',
        image: 'https://theloopywhisk.com/wp-content/uploads/2020/01/Chocolate-Chip-Muffins_730px-featured.jpg',
        category: ConstString.MAINDISH

      },
      {
        name: 'Side Muffins',
        price: '5.00',
        desc: 'Its A Muffin',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTq754iNz3wYcQ4D4OLRqepYxmDBqrU31qIgOJboSWaw_4Ll0nu_hYLx5l8ooaphoaIs&usqp=CAU',
        category: ConstString.SIDEDISH

      },
      {
        name: 'Make Sure to Hide Muffins',
        price: '5.00',
        desc: 'Its A Blueberry Muffin',
        image: 'https://i0.wp.com/www.happinessishomemade.net/wp-content/uploads/2016/11/Bakery-Style-Blueberry-Muffins.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Milk',
        price: '5.00',
        desc: 'Melk',
        image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/11/milk.jpg?quality=82&strip=1',
        category: ConstString.DRINKS
      },
    ]
  },
  {

    restaurant: 'My Kori',
    category: ConstString.DESSERT,
    address: 'No.19 Jalan Kasim Babun',
    description: 'Potable liquid, especially one other than water, as tea, coffee, beer, or milk: The price of the meal includes a beverage.',
    rate: 4.1,
    image: 'https://www.paradigmmall.com.my/images/store/food/mykori_store.jpg',
    userId: 'RpfohqbkAXN0NoOokrSWaT6Uteq2',
    createdAt: new Date().toLocaleString(),
    rating: [{
      userId: 1,
      userName: 'Mohamad Abu Lutut',
      review: 'This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
      updatedAt: '10/31/2022, 1:17:51 PM'
    }, {
      userId: 2,
      userName: 'Mohamad Abu Lutut Kanan',
      review: 'Sedap Wooo',
      rating: parseInt(4),
      createdAt: '10/31/2022, 1:17:51 PM',
    },],
    food: [
      {
        name: 'Honey',
        price: '5.00',
        desc: 'Honey Dew',
        image: 'https://1.bp.blogspot.com/--2Nk3kS7LIc/XBCpLVvuHTI/AAAAAAAAXTM/xSvyGrni-hUEkPe7YJF9QuY2vRx7hz2zQCLcBGAs/s1600/Screenshot_20181212-094805_Instagram.jpg',
        category: ConstString.DRINKS
      },
      {
        name: 'Muffins',
        price: '5.00',
        desc: 'Its A Dangerous Muffin',
        image: 'https://thumbs.gfycat.com/RemorsefulMildIndianringneckparakeet-max-1mb.gif',
        category: ConstString.MAINDISH
      },
      {
        name: 'Side Muffins',
        price: '5.00',
        desc: 'Its A Muffin',
        image: 'https://www.xpresszoom.com/wp-content/uploads/job-manager-uploads/main_image/2020/12/74682697_125478965535935_6286918680584388608_n.jpg',
        category: ConstString.SIDEDISH
      },
      {
        name: 'Make Sure to Hide Muffins',
        price: '5.00',
        desc: 'Its A Blueberry Muffin',
        image: 'https://i0.wp.com/www.happinessishomemade.net/wp-content/uploads/2016/11/Bakery-Style-Blueberry-Muffins.jpg',
        category: ConstString.SIDEDISH
      },
    ]
  },
];
