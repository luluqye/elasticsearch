define({ "api": [
  {
    "type": "get",
    "url": "/brand/{keywords}",
    "title": "List Brand",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/brand/samsung"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetBrandKeywords"
  },
  {
    "type": "get",
    "url": "/lctgr-all/{keywords}",
    "title": "List All Lctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/lctgr-all/iphone"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetLctgrAllKeywords"
  },
  {
    "type": "get",
    "url": "/lctgr/{keywords}",
    "title": "List Lctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/lctgr/iphone"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetLctgrKeywords"
  },
  {
    "type": "get",
    "url": "/mctgr/{keyword_lct}/{keyword}",
    "title": "List Mctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keyword} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/mctgr/mobile%20phone/samsung"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetMctgrKeyword_lctKeyword"
  },
  {
    "type": "get",
    "url": "/miss/{keywords}",
    "title": "Miss Spell",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/miss/samsun"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetMissKeywords"
  },
  {
    "type": "get",
    "url": "/sctgr/{keyword_mct}/{keyword}",
    "title": "List Sctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{prdnm} type string, not empty parameter {prdnm} to search document</p>",
    "sampleRequest": [
      {
        "url": "/sctgr/mobile%20phone/samsung"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSctgrKeyword_mctKeyword"
  },
  {
    "type": "get",
    "url": "/search/{keywords}",
    "title": "Search",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/search/samsung?sort=pop_score&&order=asc&&term[]=lctgr_nm.keyword&&key[]=Mobile+Phone+%2F+Smartwatch&&term[]=mctgr_nm.keyword&&key[]=Mobile%20Phone&&range=sel_prc&&rangemin=500000&&rangemax=1000000&&page=0&&limit=10&&brand=Asus"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSearchKeywords"
  },
  {
    "type": "get",
    "url": "/search/lctgr/{keyword}/{keyword_lct}/{page}/{limit}",
    "title": "Searching Lctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/search/lctgr/iphone/mobile%20phone/0/10"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSearchLctgrKeywordKeyword_lctPageLimit"
  },
  {
    "type": "get",
    "url": "/search/mctgr/{prdnm}/{mctgr}/{page}/{limit}",
    "title": "Searching Mctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/search/mctgr/iphone/mobile%20phone/0/10"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSearchMctgrPrdnmMctgrPageLimit"
  },
  {
    "type": "get",
    "url": "/search/multiple/{keywords}/{page}/{limit}",
    "title": "Multiple",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/search/multiple/iphone/0/10"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSearchMultipleKeywordsPageLimit"
  },
  {
    "type": "get",
    "url": "/search/sctgr/{prdnm}/{sctgr}/{page}/{limit}",
    "title": "Searching Sctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{sctgr} type string, not empty parameter {sctgr} to search document</p>",
    "sampleRequest": [
      {
        "url": "/search/sctgr/iphone%206/iphone/0/10"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSearchSctgrPrdnmSctgrPageLimit"
  }
] });
