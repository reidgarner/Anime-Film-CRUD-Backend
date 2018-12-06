exports.seed = (knex, Promise) => {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([
        { 
          title: 'Akira', 
          director: 'Katsuhiro Otomo', 
          year: 1988, 
          your_rating: 8.5, 
          poster_url: 'http://www.gstatic.com/tv/thumb/v22vodart/10623693/p10623693_v_v8_aa.jpg'
        },
        {
          title: 'Wolf Children', 
          director: 'Mamoru Hosoda', 
          year: 2012, 
          your_rating: 8.2, 
          poster_url: 'http://www.gstatic.com/tv/thumb/movieposters/10317016/p10317016_p_v8_ad.jpg'
        },
        { 
          title: 'Redline', 
          director: 'Takeshi Koike', 
          year: 2009, 
          your_rating: 7.5, 
          poster_url: 'http://www.gstatic.com/tv/thumb/v22vodart/9043857/p9043857_v_v8_aa.jpg'
        },
        { 
          title: 'Your Name', 
          director: 'Makoto Shinkai', 
          year: 2016, 
          your_rating: 8.9, 
          poster_url: 'http://www.gstatic.com/tv/thumb/v22vodart/13207488/p13207488_v_v8_aa.jpg'
        },
        { 
          title: 'Princess Mononoke', 
          director: 'Hayao Miyazaki', 
          year: 1997, 
          your_rating: 9.1, 
          poster_url: 'http://www.gstatic.com/tv/thumb/v22vodart/127896/p127896_v_v8_ad.jpg'
        },
      ])
    })
}
