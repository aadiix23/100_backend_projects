module.exports = {
  length: {
    mm:    { factor: 0.001 },
    cm:    { factor: 0.01  },
    m:     { factor: 1     },    // base
    km:    { factor: 1000  },
    inch:  { factor: 0.0254 },
    foot:  { factor: 0.3048 },
    yard:  { factor: 0.9144 },
    mile:  { factor: 1609.34 },
  },
  weight: {
    mg:    { factor: 0.000001 },
    g:     { factor: 0.001    },
    kg:    { factor: 1        },  // base
    tonne: { factor: 1000     },
    oz:    { factor: 0.028349 },
    lb:    { factor: 0.453592 },
  },
  time: {
    ms:    { factor: 0.001  },
    s:     { factor: 1      },  // base
    min:   { factor: 60     },
    hr:    { factor: 3600   },
    day:   { factor: 86400  },
  },
};