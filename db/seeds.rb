# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.new_with_cart(email: 'test@wellness.com', password: 'testpassword', first_name: 'Jerry', last_name: 'Hicks', address: '111 La Jolla Blvd', city: 'La Jolla', state_initials: 'CA', zip: 92037)
user.save

Item.create([
  {
    name: "Ashwagandha Capsules",
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/ashwagandha_root_background_340-1.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/ashwagandha_root_background_340-1.jpg',
    description: "- Ashwagandha (Withania somnifera), also known as winter cherry, is becoming a favorite adaptogen with many Western herbalists because of its unique nourishing and stabilizing properties. An adaptogen is an herb with overall nervine tonic benefits – energizing the body when it needs it during the day, and calming overactive nerves for easy and restful sleep at night. In the daytime, it helps support healthy weight loss, detox, cognitive function, hormone balance, sexual health, and the immune system, all of which can be negatively impacted by stress.\r\n\r\n Suggested Use: : Take 1 capsule 3 times per day before meals or as directed by your health care professional.\r\n\r\n Bottle Contains: 90 vegetarian capsules, 500mg each\r\n\r\n Ingredients: Organic Withania somnifera (Ashwagandha Root), Organic Zingiber officinale (Ginger Root)\r\n\r\nDoes not contain: Yeast, gluten, corn, soy, milk, fish, animal products, binders, fillers, preservatives or artificial coloring.\r\n\r\n Kosher Certified: No animal derivatives.",
    price: 20
  },

  {
    name: 'AB-12 Boost Quick Dissolve Tablets',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white-300x300.jpg',
    description: "If there ever was a heart-mind vitamin, then B12 is it. Synthesizing neurotransmitters that govern mood, energy, sleep, appetite, and motivation all the while supporting heart and circulatory health, Vitamin B12 is a brilliant multi-tasker and not a vitamin to ignore\r\n\r\nSuggested Use: Take one cherry-flavored tablet daily, or use as directed by your healthcare practitioner.\r\n\r\nBottle Contains: 30 quick-dissolve tablets\r\n\r\nIngredients: Folate (as Quatrefolic® (6S)-5-methyltetrahydrofolic acid, glucosamine salt), Vitamin B12 (as MecobalActive™ methylcobalamin)\r\n\r\nDoes Not Contain: Wheat, gluten, yeast, soy protein, animal or dairy products, fish, shellfish, peanuts, tree nuts, egg, ingredients derived from genetically modified organisms (GMOs), artificial colors, artificial sweeteners, or artificial preservatives.",
    price: 19
  },

  {
    name: 'Liver Repair Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background-300x300.jpg',
    description: "Liver Repair is a proprietary blend of five herbs traditionally used to support liver cleansing and optimal liver health: Bhumyamalaki, Barberry, Turmeric, Amalaki, and Guduchi. These herbs support healthy detoxification pathways while simultaneously boosting the body’s natural ability to maintain healthy energy levels, promoting vitality and longevity.\r\n\r\n\r\nSuggested Use: Take 1 capsule 2 times per day after meals or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nIngredients: Organic Phyllanthus niruri (Bhumyamalaki Herb), Wildcrafted Berberis vulgaris (Barberry Root Bark), Organic Curcuma longa (Turmeric Root), Organic Phyllanthus emblica (Amalaki Fruit), Organic Tinospora cordifolia (Guduchi Stem)\r\n\r\nDoes not contain: Yeast, gluten, corn, soy, milk, fish, animal products, binders, fillers, preservatives or artificial coloring.",
    price: 33
  },

  {
    name: 'Sleep Easy Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340-300x300.jpg',
    description: "Sleep Easy is a proprietary blend of traditional Ayurvedic herbs that soothe, calm, and support the nervous system.* Although Sleep Easy is calming, it is not considered a sedative. It is important when balancing sleep that we support natural rejuvenation of the nervous system so that the body can sedate itself in the evening, allowing for a deep and restful sleep.\r\n\r\nSuggested Use: Take 2 capsules before bed or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nngredients: Organic Centella asiatica (Gotu Kola Herb), Organic Withania somnifera (Ashwagandha Root), Organic Scutellaria lateriflora (Skullcap Herb), Organic Passiflora incarnate (Passionflower Herb)",
    price: 22
  },

  {
    name: 'Thyroid Support',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/thyroid-support.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/thyroid-support.jpg',
    description: "Thyroid Support is a comprehensive freeze-dried, BSE-free, bovine, multi-glandular, mineral and herbal formula to support healthy thyroid function.\r\n\r\nSuggested Use: Take one capsule daily with water (away from food), or as directed by your healthcare practitioner.\r\n\r\nIBottle Contains: 60 capsules\r\n\r\nngredients: Iodine, Selenium, Dulse, Thyroid Gland, Adrenal Gland, Irish Moss, L-Tyrosine, Anterior Pituitary Gland, Bladderwrack, Spleen, Thymus Gland",
    price: 24
  },

  {
    name: 'Thyroid Support',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/thyroid-support.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/thyroid-support.jpg',
    description: "Thyroid Support is a comprehensive freeze-dried, BSE-free, bovine, multi-glandular, mineral and herbal formula to support healthy thyroid function.\r\n\r\nSuggested Use: Take one capsule daily with water (away from food), or as directed by your healthcare practitioner.\r\n\r\nIBottle Contains: 60 capsules\r\n\r\nngredients: Iodine, Selenium, Dulse, Thyroid Gland, Adrenal Gland, Irish Moss, L-Tyrosine, Anterior Pituitary Gland, Bladderwrack, Spleen, Thymus Gland",
    price: 24
  },

  {
    name: 'AB-12 Boost Quick Dissolve Tablets',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white-300x300.jpg',
    description: "If there ever was a heart-mind vitamin, then B12 is it. Synthesizing neurotransmitters that govern mood, energy, sleep, appetite, and motivation all the while supporting heart and circulatory health, Vitamin B12 is a brilliant multi-tasker and not a vitamin to ignore\r\n\r\nSuggested Use: Take one cherry-flavored tablet daily, or use as directed by your healthcare practitioner.\r\n\r\nBottle Contains: 30 quick-dissolve tablets\r\n\r\nIngredients: Folate (as Quatrefolic® (6S)-5-methyltetrahydrofolic acid, glucosamine salt), Vitamin B12 (as MecobalActive™ methylcobalamin)\r\n\r\nDoes Not Contain: Wheat, gluten, yeast, soy protein, animal or dairy products, fish, shellfish, peanuts, tree nuts, egg, ingredients derived from genetically modified organisms (GMOs), artificial colors, artificial sweeteners, or artificial preservatives.",
    price: 19
  },

  {
    name: 'Liver Repair Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background-300x300.jpg',
    description: "Liver Repair is a proprietary blend of five herbs traditionally used to support liver cleansing and optimal liver health: Bhumyamalaki, Barberry, Turmeric, Amalaki, and Guduchi. These herbs support healthy detoxification pathways while simultaneously boosting the body’s natural ability to maintain healthy energy levels, promoting vitality and longevity.\r\n\r\n\r\nSuggested Use: Take 1 capsule 2 times per day after meals or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nIngredients: Organic Phyllanthus niruri (Bhumyamalaki Herb), Wildcrafted Berberis vulgaris (Barberry Root Bark), Organic Curcuma longa (Turmeric Root), Organic Phyllanthus emblica (Amalaki Fruit), Organic Tinospora cordifolia (Guduchi Stem)\r\n\r\nDoes not contain: Yeast, gluten, corn, soy, milk, fish, animal products, binders, fillers, preservatives or artificial coloring.",
    price: 33
  },

  {
    name: 'Sleep Easy Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340-300x300.jpg',
    description: "Sleep Easy is a proprietary blend of traditional Ayurvedic herbs that soothe, calm, and support the nervous system.* Although Sleep Easy is calming, it is not considered a sedative. It is important when balancing sleep that we support natural rejuvenation of the nervous system so that the body can sedate itself in the evening, allowing for a deep and restful sleep.\r\n\r\nSuggested Use: Take 2 capsules before bed or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nngredients: Organic Centella asiatica (Gotu Kola Herb), Organic Withania somnifera (Ashwagandha Root), Organic Scutellaria lateriflora (Skullcap Herb), Organic Passiflora incarnate (Passionflower Herb)",
    price: 22
  },

  {
    name: 'AB-12 Boost Quick Dissolve Tablets',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white-300x300.jpg',
    description: "If there ever was a heart-mind vitamin, then B12 is it. Synthesizing neurotransmitters that govern mood, energy, sleep, appetite, and motivation all the while supporting heart and circulatory health, Vitamin B12 is a brilliant multi-tasker and not a vitamin to ignore\r\n\r\nSuggested Use: Take one cherry-flavored tablet daily, or use as directed by your healthcare practitioner.\r\n\r\nBottle Contains: 30 quick-dissolve tablets\r\n\r\nIngredients: Folate (as Quatrefolic® (6S)-5-methyltetrahydrofolic acid, glucosamine salt), Vitamin B12 (as MecobalActive™ methylcobalamin)\r\n\r\nDoes Not Contain: Wheat, gluten, yeast, soy protein, animal or dairy products, fish, shellfish, peanuts, tree nuts, egg, ingredients derived from genetically modified organisms (GMOs), artificial colors, artificial sweeteners, or artificial preservatives.",
    price: 19
  },

  {
    name: 'Liver Repair Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background-300x300.jpg',
    description: "Liver Repair is a proprietary blend of five herbs traditionally used to support liver cleansing and optimal liver health: Bhumyamalaki, Barberry, Turmeric, Amalaki, and Guduchi. These herbs support healthy detoxification pathways while simultaneously boosting the body’s natural ability to maintain healthy energy levels, promoting vitality and longevity.\r\n\r\n\r\nSuggested Use: Take 1 capsule 2 times per day after meals or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nIngredients: Organic Phyllanthus niruri (Bhumyamalaki Herb), Wildcrafted Berberis vulgaris (Barberry Root Bark), Organic Curcuma longa (Turmeric Root), Organic Phyllanthus emblica (Amalaki Fruit), Organic Tinospora cordifolia (Guduchi Stem)\r\n\r\nDoes not contain: Yeast, gluten, corn, soy, milk, fish, animal products, binders, fillers, preservatives or artificial coloring.",
    price: 33
  },

  {
    name: 'Sleep Easy Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340-300x300.jpg',
    description: "Sleep Easy is a proprietary blend of traditional Ayurvedic herbs that soothe, calm, and support the nervous system.* Although Sleep Easy is calming, it is not considered a sedative. It is important when balancing sleep that we support natural rejuvenation of the nervous system so that the body can sedate itself in the evening, allowing for a deep and restful sleep.\r\n\r\nSuggested Use: Take 2 capsules before bed or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nngredients: Organic Centella asiatica (Gotu Kola Herb), Organic Withania somnifera (Ashwagandha Root), Organic Scutellaria lateriflora (Skullcap Herb), Organic Passiflora incarnate (Passionflower Herb)",
    price: 22
  },

  {
    name: 'Turmeric Spices',
    img_full: 'https://images.pexels.com/photos/672046/pexels-photo-672046.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    img_thumbnail: 'https://images.pexels.com/photos/672046/pexels-photo-672046.jpeg?auto=compress&cs=tinysrgb&h=350',
    description: "Extremely fresh!",
    price: 20
  },

  {
    name: 'Hand Wash',
    img_full: 'https://i.imgur.com/wsIYWia.jpg',
    img_thumbnail: 'https://i.imgur.com/wsIYWia_d.jpg?maxwidth=520&shape=thumb&fidelity=high',
    description: "Organic hand wash",
    price: 8
  },

  {
    name: 'Aloe Lotion',
    img_full: 'https://i.imgur.com/4c5LDoK.jpg',
    img_thumbnail: 'https://i.imgur.com/4c5LDoK_d.jpg?maxwidth=520&shape=thumb&fidelity=high',
    description: "Great for the skin!",
    price: 10
  },

  {
    name: "Ashwagandha Capsules",
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/ashwagandha_root_background_340-1.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/ashwagandha_root_background_340-1.jpg',
    description: "- Ashwagandha (Withania somnifera), also known as winter cherry, is becoming a favorite adaptogen with many Western herbalists because of its unique nourishing and stabilizing properties. An adaptogen is an herb with overall nervine tonic benefits – energizing the body when it needs it during the day, and calming overactive nerves for easy and restful sleep at night. In the daytime, it helps support healthy weight loss, detox, cognitive function, hormone balance, sexual health, and the immune system, all of which can be negatively impacted by stress.\r\n\r\n Suggested Use: : Take 1 capsule 3 times per day before meals or as directed by your health care professional.\r\n\r\n Bottle Contains: 90 vegetarian capsules, 500mg each\r\n\r\n Ingredients: Organic Withania somnifera (Ashwagandha Root), Organic Zingiber officinale (Ginger Root)\r\n\r\nDoes not contain: Yeast, gluten, corn, soy, milk, fish, animal products, binders, fillers, preservatives or artificial coloring.\r\n\r\n Kosher Certified: No animal derivatives.",
    price: 20
  },

  {
    name: 'AB-12 Boost Quick Dissolve Tablets',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/b12-boost_2017_1500_5mthf_white-300x300.jpg',
    description: "If there ever was a heart-mind vitamin, then B12 is it. Synthesizing neurotransmitters that govern mood, energy, sleep, appetite, and motivation all the while supporting heart and circulatory health, Vitamin B12 is a brilliant multi-tasker and not a vitamin to ignore\r\n\r\nSuggested Use: Take one cherry-flavored tablet daily, or use as directed by your healthcare practitioner.\r\n\r\nBottle Contains: 30 quick-dissolve tablets\r\n\r\nIngredients: Folate (as Quatrefolic® (6S)-5-methyltetrahydrofolic acid, glucosamine salt), Vitamin B12 (as MecobalActive™ methylcobalamin)\r\n\r\nDoes Not Contain: Wheat, gluten, yeast, soy protein, animal or dairy products, fish, shellfish, peanuts, tree nuts, egg, ingredients derived from genetically modified organisms (GMOs), artificial colors, artificial sweeteners, or artificial preservatives.",
    price: 19
  },

  {
    name: 'Liver Repair Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/liver-repair-phyllanthus_background-300x300.jpg',
    description: "Liver Repair is a proprietary blend of five herbs traditionally used to support liver cleansing and optimal liver health: Bhumyamalaki, Barberry, Turmeric, Amalaki, and Guduchi. These herbs support healthy detoxification pathways while simultaneously boosting the body’s natural ability to maintain healthy energy levels, promoting vitality and longevity.\r\n\r\n\r\nSuggested Use: Take 1 capsule 2 times per day after meals or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nIngredients: Organic Phyllanthus niruri (Bhumyamalaki Herb), Wildcrafted Berberis vulgaris (Barberry Root Bark), Organic Curcuma longa (Turmeric Root), Organic Phyllanthus emblica (Amalaki Fruit), Organic Tinospora cordifolia (Guduchi Stem)\r\n\r\nDoes not contain: Yeast, gluten, corn, soy, milk, fish, animal products, binders, fillers, preservatives or artificial coloring.",
    price: 33
  },

  {
    name: 'Sleep Easy Capsules',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/slep-easy_gotu-kola-background_340-300x300.jpg',
    description: "Sleep Easy is a proprietary blend of traditional Ayurvedic herbs that soothe, calm, and support the nervous system.* Although Sleep Easy is calming, it is not considered a sedative. It is important when balancing sleep that we support natural rejuvenation of the nervous system so that the body can sedate itself in the evening, allowing for a deep and restful sleep.\r\n\r\nSuggested Use: Take 2 capsules before bed or as directed by your health care professional.\r\n\r\nBottle Contains: 90 vegetarian capsules, 475 mg each\r\n\r\nngredients: Organic Centella asiatica (Gotu Kola Herb), Organic Withania somnifera (Ashwagandha Root), Organic Scutellaria lateriflora (Skullcap Herb), Organic Passiflora incarnate (Passionflower Herb)",
    price: 22
  },

  {
    name: 'Thyroid Support',
    img_full: 'https://store.lifespa.com/wp-content/uploads/2016/02/thyroid-support.jpg',
    img_thumbnail: 'https://store.lifespa.com/wp-content/uploads/2016/02/thyroid-support.jpg',
    description: "Thyroid Support is a comprehensive freeze-dried, BSE-free, bovine, multi-glandular, mineral and herbal formula to support healthy thyroid function.\r\n\r\nSuggested Use: Take one capsule daily with water (away from food), or as directed by your healthcare practitioner.\r\n\r\nIBottle Contains: 60 capsules\r\n\r\nngredients: Iodine, Selenium, Dulse, Thyroid Gland, Adrenal Gland, Irish Moss, L-Tyrosine, Anterior Pituitary Gland, Bladderwrack, Spleen, Thymus Gland",
    price: 24
  }

  
])

