const db = require("./connect");
const SQL = require("sql-template-strings");

module.exports.healthCheck = async () => {
  try {
    await db.query("SELECT 1+1 AS result");
    //const result = await db.query("SELECT * FROM taxonomy");
    await db.end();
    return {
      statusCode: 200,
      //body: JSON.stringify(result)
      body: JSON.stringify({ message: "Connection successful." })
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not connect with database."
    };
  }
};

module.exports.query = async event => {
  try {
    const params = event.multiValueQueryStringParameters;
    if (params && params.t && params.age) {
      const taxonomy = params.t ? params.t[0] : null;
      const age_category = params.age;
      //.map(age => `'${age}'`).join(",");
      /* const query = SQL`
      SELECT s.sampleID, s.PMID, s.age_category, st.abundance, s.born_method
      from samples AS s
      INNER JOIN sample_taxonomy AS st ON s.id = st.sample_id
      INNER JOIN taxonomy AS t ON st.taxonomy_id = t.id
      WHERE t.name = ${taxonomy} AND s.age_category IN (${age_category})
    `; */
      const result = await db.query(
        "SELECT s.sampleID, s.PMID, s.age_category, st.abundance, s.born_method from samples AS s INNER JOIN sample_taxonomy AS st ON s.id = st.sample_id INNER JOIN taxonomy AS t ON st.taxonomy_id = t.id WHERE t.name = ? AND s.age_category IN (?)",
        [taxonomy, age_category]
      );
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not find result."
    };
  }
};

const recurive_query = async taxonomy => {
  let node = [];
  let i;
  let result = await db.query("CALL get_children(?)", [taxonomy]);

  if (result[0].length === 0) return node;
  for (i = 0; i < result[0].length; i++) {
    let cd = result[0][i];
    cd.child = await recurive_query(result[0][i].name);
    node.push(cd);
  }

  return node;
};

module.exports.children = async event => {
  try {
    const params = event.queryStringParameters;
    if (params) {
      const taxonomy = params.t ? params.t : null;
      result = await recurive_query(taxonomy);
      console.log(result);
      //const result = await db.query("CALL get_children(?)", [taxonomy]);
      return {
        statusCode: 200,
        body: JSON.stringify(result)
      };
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: err.statusCode || 500,
      headers: { "Content-Type": "text/plain" },
      body: "Could not find result."
    };
  }
};
