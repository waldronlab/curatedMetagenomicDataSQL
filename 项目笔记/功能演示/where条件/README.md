# 什么时候可以使用where条件

除了添加样本的时候，其它时候(删除和查询)都可以使用where条件。

# 等值条件实验：追加两个年龄都为10的样本，然后一次性删除掉

## 添加的样本1

```json
{
  "BMI": "31.0",
  "age": 10,
  "tnm": "t1n0m0",
  "PMID": "25432777",
  "ajcc": "i",
  "fobt": "no",
  "gender": "male",
  "country": "FRA",
  "curator": [
    "Paolo_Manghi"
  ],
  "disease": [
    "CRC"
  ],
  "sampleID": "CCIS91228662ST-4-0",
  "body_site": "stool",
  "subjectID": "FR-275",
  "age_category": "adult",
  "number_bases": "8027807010",
  "number_reads": "94076829",
  "NCBI_accession": [
    "ERR479389",
    "ERR479390",
    "ERR480885",
    "ERR480886"
  ],
  "disease_subtype": "carcinoma",
  "non_westernized": "no",
  "study_condition": "CRC",
  "DNA_extraction_kit": "Gnome",
  "median_read_length": "92",
  "minimum_read_length": "45",
  "sequencing_platform": "IlluminaHiSeq",
  "antibiotics_current_use": "NA"
}
```

## 添加的样本2

```json
{
  "BMI": "31.0",
  "age": 10,
  "tnm": "t1n0m0",
  "PMID": "25432777",
  "ajcc": "i",
  "fobt": "no",
  "gender": "male",
  "country": "FRA",
  "curator": [
    "Paolo_Manghi"
  ],
  "disease": [
    "CRC"
  ],
  "sampleID": "CCIS91228662ST-4-0test",
  "body_site": "stool",
  "subjectID": "FR-275",
  "age_category": "adult",
  "number_bases": "8027807010",
  "number_reads": "94076829",
  "NCBI_accession": [
    "ERR479389",
    "ERR480886"
  ],
  "disease_subtype": "carcinoma",
  "non_westernized": "no",
  "study_condition": "CRC",
  "DNA_extraction_kit": "Gnome",
  "median_read_length": "92",
  "minimum_read_length": "45",
  "sequencing_platform": "IlluminaHiSeq",
  "antibiotics_current_use": "NA"
}
```

## 删除的条件

```json
{
  "age": 10
}
```

## 删除的结果

```json
{
  "success": true,
  "count": 2
}
```

## 结论

使用一个字段，进行等值条件。进行删除是没有问题的。

# 不等值条件实验

上面添加的样本已经被删光了，所以我们得重新添加。

## 添加样本

### 添加的样本1（特点:年龄10）

```json
{
  "BMI": "31.0",
  "age": 10,
  "tnm": "t1n0m0",
  "PMID": "25432777",
  "ajcc": "i",
  "fobt": "no",
  "gender": "male",
  "country": "FRA",
  "curator": [
    "Paolo_Manghi"
  ],
  "disease": [
    "CRC"
  ],
  "sampleID": "CCIS91228662ST-4-0",
  "body_site": "stool",
  "subjectID": "FR-275",
  "age_category": "adult",
  "number_bases": "8027807010",
  "number_reads": "94076829",
  "NCBI_accession": [
    "ERR479389",
    "ERR479390",
    "ERR480885",
    "ERR480886"
  ],
  "disease_subtype": "carcinoma",
  "non_westernized": "no",
  "study_condition": "CRC",
  "DNA_extraction_kit": "Gnome",
  "median_read_length": "92",
  "minimum_read_length": "45",
  "sequencing_platform": "IlluminaHiSeq",
  "antibiotics_current_use": "NA"
}
```

### 添加的样本2（特点:年龄20）

```json
{
  "BMI": "31.0",
  "age": 20,
  "tnm": "t1n0m0",
  "PMID": "25432777",
  "ajcc": "i",
  "fobt": "no",
  "gender": "male",
  "country": "FRA",
  "curator": [
    "Paolo_Manghi"
  ],
  "disease": [
    "CRC"
  ],
  "sampleID": "CCIS91228662ST-4-0test",
  "body_site": "stool",
  "subjectID": "FR-275",
  "age_category": "adult",
  "number_bases": "8027807010",
  "number_reads": "94076829",
  "NCBI_accession": [
    "ERR479389",
    "ERR480885",
    "ERR480886"
  ],
  "disease_subtype": "carcinoma",
  "non_westernized": "no",
  "study_condition": "CRC",
  "DNA_extraction_kit": "Gnome",
  "median_read_length": "92",
  "minimum_read_length": "45",
  "sequencing_platform": "IlluminaHiSeq",
  "antibiotics_current_use": "NA"
}
```

## 删除

### 条件(年龄大于15)

```json
{
  "age": 
    {
      [Op.gt]: 15
    }
}
```

### 注意以上条件

此前使用的是

```json
{
  "age": 10
}
```

现在把上面的标量10，变成了一个对象

```json
{
  "gt": 15
}
```

### 对以上条件的意义的解释

不管是只给出标量10，还是给出一个`"gt": 15`，所代表的意义都是对数据`age`进行一个检测(test)。

所以不管是标量10，还是`"gt": 15`，都是一个检测子而已。

类似"gt"这种算子，以后陆续还会出现不少。**两边的双引号必不可少** 。

## 然后查询最近添加的样本

样本库中就只剩下10岁的那个了。



