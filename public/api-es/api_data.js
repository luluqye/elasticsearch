define({ "api": [
  {
    "type": "get",
    "url": "/mctgr/{keywords}/{page}/{limit}",
    "title": "List Mctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{keywords} type string, not empty parameter {keywords} to search document</p>",
    "sampleRequest": [
      {
        "url": "/mctgr/iphone/0/10"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetMctgrKeywordsPageLimit"
  },
  {
    "type": "get",
    "url": "/sctgr/{mctgr}/{prdnm}/{page}/{limit}",
    "title": "List Sctgr",
    "group": "Search_Get",
    "version": "0.0.1",
    "description": "<p>{prdnm} type string, not empty parameter {prdnm} to search document</p>",
    "sampleRequest": [
      {
        "url": "/sctgr/mobile%20phone/samsung/0/10"
      }
    ],
    "filename": "routes/web.php",
    "groupTitle": "Search_Get",
    "name": "GetSctgrMctgrPrdnmPageLimit"
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
    "title": "Searching",
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
