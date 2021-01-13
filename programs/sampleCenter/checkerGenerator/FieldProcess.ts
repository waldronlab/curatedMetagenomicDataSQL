//注意：这个文件的内容不要手动修改
//注意：因为这个文件是使用checkerGeneratorV1根据数据库的内容自动生成的脚本

import {FieldCheckerV3MultiValue} from "./FieldCheckerV3MultiValue";


let f0=new FieldCheckerV3MultiValue("sampleID",true,"[a-zA-Z]\\S+",false);
let f1=new FieldCheckerV3MultiValue("subjectID",true,"[a-zA-Z]\\S+",false);
let f2=new FieldCheckerV3MultiValue("body_site",true,"stool|skin|vagina|oralcavity|nasalcavity|lung|milk",false);
let f3=new FieldCheckerV3MultiValue("body_subsite",false,"anterior_nares|hard_palate|keratinized_gingiva|l_retroauricular_crease|r_retroauricular_crease|mid_vagina|palatine_tonsils|saliva|stool|supragingival_plaque|subgingival_plaque|throat|vaginal_introitus|posterior_fornix|tongue_dorsum|sputum|buccal_mucosa|left_elbow|right_ear|left_ear|right_elbow|rectal_swab|chest",false);
let f4=new FieldCheckerV3MultiValue("antibiotics_current_use",false,"yes|no",false);
let f5=new FieldCheckerV3MultiValue("antibiotics_family",false,"dopamine_antagonists|phenylpiperidines|thienobenzodiazepines|blood_pressure_medication|diabetes_oral_medication|anti_retrovirals|beta_blockers|reverse_transcriptase_inhibitors|anti_virals|cephalosporins|penicillins|macrolides|beta_lactamase_inhibitors|nitrofurans|sulphonamides|aminoglycosides|carbapenems|fluoroquinolones|laxatives|none",true);
let f6=new FieldCheckerV3MultiValue("study_condition",false,"ACVD|acute_diarrhoea|cellulitis|melanoma|gangrene|osteoarthritis|control|NK|pyelonefritis|salmonellosis|sepsis|skininf|suspinf|arthritis|STEC|CRC|adenoma|fatty_liver|hypertension|pre-hypertension|coeliac|asthma|gestational_diabetes|cirrhosis|HBV|HDV|HEV|CMV|CDI|IBD|T2D|T1D|AD|AR|IGT|schizophrenia|ascites|wilson|otitis|bronchitis|pneumonia|respiratoryinf|cough|stomatitis|fever|pyelonephritis|infectiousgastroenteritis|tonsillitis|cystitis|abdominalhernia|psoriasis|cephalosporins|AS|RA|metabolic_syndrome|FMT|premature_born|periodontitis|SRP|STH|BD|chorioamnionitis|pre-eclampsia|carcinoma_surgery_history",false);
let f7=new FieldCheckerV3MultiValue("disease",false,"healthy|acute_diarrhoea|hepatitis|ACVD|NK|CRC|STEC|melanoma|adenoma|arthritis|cellulitis|gangrene|osteoarthritis|NK|pyelonefritis|salmonellosis|sepsis|skininf|suspinf|fatty_liver|hypertension|coeliac|asthma|gestational_diabetes|cirrhosis|HBV|HDV|HEV|CMV|CDI|IBD|T2D|T1D|AD|AR|IGT|BD|schizophrenia|ascites|wilson|otitis|bronchitis|pneumonia|respiratoryinf|cough|stomatitis|fever|pyelonephritis|infectiousgastroenteritis|tonsillitis|cystitis|abdominalhernia|psoriasis|RA|metabolic_syndrome|metastases|hypercholesterolemia|periodontitis|ascaris_lumbricoides|necator_americanus|trichuris_trichiura|chorioamnionitis|pre-eclampsia",true);
let f8=new FieldCheckerV3MultiValue("disease_subtype",false,"healthy|CD|UC|adenoma|smalladenoma|largeadenoma|advancedadenoma|adenocarcinoma|carcinoma|AS|cholera|T1D_nonconverter|T1D_seroconverter|NAFLD|Ulcerative_colitis|Indeterminate_colitis",false);
let f9=new FieldCheckerV3MultiValue("age",false,"[0-9]+",false);
let f10=new FieldCheckerV3MultiValue("infant_age",false,"[0-9]+",false);
let f11=new FieldCheckerV3MultiValue("age_category",false,"newborn|child|schoolage|adult|senior",false);
let f12=new FieldCheckerV3MultiValue("gender",false,"female|male|other",false);
let f13=new FieldCheckerV3MultiValue("visit_number",false,"[0-9]+",false);
let f14=new FieldCheckerV3MultiValue("BMI",false,"[0-9]+\\.?[0-9]*",false);
let f15=new FieldCheckerV3MultiValue("country",true,"LBR|SLV|CAN|DNK|EST|FJI|FIN|FRA|DEU|ITA|MNG|NLD|NOR|ESP|PHL|SWE|USA|GBR|CHN|RUS|LUX|AUT|TZA|PER|MDG|ISL|BRN|IDN|MYS|HUN|SVK|SGP|ISR|BGD|KAZ|IND|GHA|ETH|JPN|CMR",false);
let f16=new FieldCheckerV3MultiValue("location",false,".+",false);
let f17=new FieldCheckerV3MultiValue("population",false,"[a-zA-Z]\\S+",false);
let f18=new FieldCheckerV3MultiValue("travel_destination",false,"CMR|ETH|KEN|TZA|RWA|IND|LKA|NPL",false);
let f19=new FieldCheckerV3MultiValue("non_westernized",false,"yes|no",false);
let f20=new FieldCheckerV3MultiValue("lifestyle",false,"Hunter-gatherer|Agriculturalist|Fisher",false);
let f21=new FieldCheckerV3MultiValue("days_from_first_collection",false,"[0-9]+",false);
let f22=new FieldCheckerV3MultiValue("sequencing_platform",true,"IlluminaHiSeq|IlluminaMiSeq|IlluminaNextSeq",false);
let f23=new FieldCheckerV3MultiValue("DNA_extraction_kit",false,"Qiagen|Gnome|MoBio|MPBio|NorgenBiotek|Illuminakit|Maxwell_LEV|PSP_Spin_Stool|Tiangen|PowerSoil|other|PowerSoilPro",false);
let f24=new FieldCheckerV3MultiValue("PMID",true,"[0-9]{8}|unpublished",false);
let f25=new FieldCheckerV3MultiValue("number_reads",true,"[0-9]+",false);
let f26=new FieldCheckerV3MultiValue("number_bases",true,"[0-9]+",false);
let f27=new FieldCheckerV3MultiValue("minimum_read_length",true,"[0-9]+",false);
let f28=new FieldCheckerV3MultiValue("median_read_length",true,"[0-9]+",false);
let f29=new FieldCheckerV3MultiValue("NCBI_accession",false,"[ES]R[SR][0-9]+",true);
let f30=new FieldCheckerV3MultiValue("pregnant",false,"yes|no",false);
let f31=new FieldCheckerV3MultiValue("lactating",false,"yes|no",false);
let f32=new FieldCheckerV3MultiValue("birth_control_pil",false,"yes|no",false);
let f33=new FieldCheckerV3MultiValue("smoker",false,"yes|no",false);
let f34=new FieldCheckerV3MultiValue("ever_smoker",false,"yes|no",false);
let f35=new FieldCheckerV3MultiValue("alcohol",false,"yes|no",false);
let f36=new FieldCheckerV3MultiValue("mumps",false,"yes|no",false);
let f37=new FieldCheckerV3MultiValue("ajcc",false,"0|i|ii|iii|iv",false);
let f38=new FieldCheckerV3MultiValue("fobt",false,"yes|no",false);
let f39=new FieldCheckerV3MultiValue("tnm",false,"t4n1m1|t3nxm1|t2n0m1|tnm|t2n1m1|t4n2m1|t3n0m1|t3n2m0|t4n0m1|t4n1m0|no|t4n0m0|t3n0m0|t3n1m0|ptis|t1n0m0|t4n2m0|t3n1m1|t3n2m1|tisn0m0|t2n0m0|t1n0m1|t2n1m0|t2m0n0|t2n2m0",false);
let f40=new FieldCheckerV3MultiValue("days_after_onset",false,"[0-9]+",false);
let f41=new FieldCheckerV3MultiValue("stec_count",false,"high|low|moderate",false);
let f42=new FieldCheckerV3MultiValue("shigatoxin_2_elisa",false,"positive|negative",false);
let f43=new FieldCheckerV3MultiValue("stool_texture",false,"smooth|watery|bloody",false);
let f44=new FieldCheckerV3MultiValue("insulin_cat",false,"yes|no",false);
let f45=new FieldCheckerV3MultiValue("inr",false,"[0-9]+\\.?[0-9]*",false);
let f46=new FieldCheckerV3MultiValue("protein_intake",false,"[0-9]+\\.?[0-9]*",false);
let f47=new FieldCheckerV3MultiValue("flg_genotype",false,"wt|s1515x|e2422x|e2422x/3321dela",false);
let f48=new FieldCheckerV3MultiValue("momeducat",false,"[0-9]+",false);
let f49=new FieldCheckerV3MultiValue("hitchip_probe_class",false,"lpc|hpc",false);
let f50=new FieldCheckerV3MultiValue("hitchip_probe_number",false,"[0-9]+",false);
let f51=new FieldCheckerV3MultiValue("mgs_richness",false,"[0-9]+\\.?[0-9]*",false);
let f52=new FieldCheckerV3MultiValue("hla_drb12",false,"[0-9]+",false);
let f53=new FieldCheckerV3MultiValue("hla_dqa12",false,"[0-9]+",false);
let f54=new FieldCheckerV3MultiValue("hla_dqa11",false,"[0-9]+",false);
let f55=new FieldCheckerV3MultiValue("hla_drb11",false,"[0-9]+",false);
let f56=new FieldCheckerV3MultiValue("hla_dbq12",false,"[0-9]+",false);
let f57=new FieldCheckerV3MultiValue("hla_dbq11",false,"[0-9]+",false);
let f58=new FieldCheckerV3MultiValue("ctp",false,"[0-9]+",false);
let f59=new FieldCheckerV3MultiValue("start_solidfood",false,"[0-9]+",false);
let f60=new FieldCheckerV3MultiValue("triglycerides",false,"[0-9]+\\.?[0-9]*",false);
let f61=new FieldCheckerV3MultiValue("cholesterol",false,"[0-9]+\\.?[0-9]*",false);
let f62=new FieldCheckerV3MultiValue("hdl",false,"[0-9]+\\.?[0-9]*",false);
let f63=new FieldCheckerV3MultiValue("ldl",false,"[0-9]+\\.?[0-9]*",false);
let f64=new FieldCheckerV3MultiValue("adiponectin",false,"[0-9]+\\.?[0-9]*",false);
let f65=new FieldCheckerV3MultiValue("fasting_insulin",false,"[0-9]+\\.?[0-9]*",false);
let f66=new FieldCheckerV3MultiValue("hba1c",false,"[0-9]+\\.?[0-9]*",false);
let f67=new FieldCheckerV3MultiValue("c_peptide",false,"[0-9]+\\.?[0-9]*",false);
let f68=new FieldCheckerV3MultiValue("glp_1",false,"[0-9]+\\.?[0-9]*",false);
let f69=new FieldCheckerV3MultiValue("cd163",false,"[0-9]+\\.?[0-9]*",false);
let f70=new FieldCheckerV3MultiValue("il_1",false,"[0-9]+\\.?[0-9]*",false);
let f71=new FieldCheckerV3MultiValue("leptin",false,"[0-9]+\\.?[0-9]*",false);
let f72=new FieldCheckerV3MultiValue("glucose",false,"[0-9]+\\.?[0-9]*",false);
let f73=new FieldCheckerV3MultiValue("fgf_19",false,"[0-9]+\\.?[0-9]*",false);
let f74=new FieldCheckerV3MultiValue("glutamate_decarboxylase_2_antibody",false,"[0-9]+\\.?[0-9]*",false);
let f75=new FieldCheckerV3MultiValue("creatinine",false,"[0-9]+\\.?[0-9]*",false);
let f76=new FieldCheckerV3MultiValue("creatine",false,"[0-9]+\\.?[0-9]*",false);
let f77=new FieldCheckerV3MultiValue("albumine",false,"[0-9]+\\.?[0-9]*",false);
let f78=new FieldCheckerV3MultiValue("bilubirin",false,"[0-9]+\\.?[0-9]*",false);
let f79=new FieldCheckerV3MultiValue("prothrombin_time",false,"[0-9]+\\.?[0-9]*",false);
let f80=new FieldCheckerV3MultiValue("dyastolic_p",false,"[0-9]+\\.?[0-9]*",false);
let f81=new FieldCheckerV3MultiValue("systolic_p",false,"[0-9]+\\.?[0-9]*",false);
let f82=new FieldCheckerV3MultiValue("hscrp",false,"[0-9]+\\.?[0-9]*",false);
let f83=new FieldCheckerV3MultiValue("ferm_milk_prod_consumer",false,"dfmp",false);
let f84=new FieldCheckerV3MultiValue("family",false,".+",false);
let f85=new FieldCheckerV3MultiValue("family_role",false,"child|mother|father",false);
let f86=new FieldCheckerV3MultiValue("born_method",false,"c_section|vaginal",false);
let f87=new FieldCheckerV3MultiValue("premature",false,"yes|no",false);
let f88=new FieldCheckerV3MultiValue("birth_order",false,"[0-9]+",false);
let f89=new FieldCheckerV3MultiValue("age_twins_started_to_live_apart",false,"[0-9]+\\.?[0-9]*",false);
let f90=new FieldCheckerV3MultiValue("feeding_practice",false,"exclusively_breastfeeding|no_breastfeeding||mixed_feeding|any_breastfeeding|exclusively_formula_feeding",false);
let f91=new FieldCheckerV3MultiValue("breastfeeding_duration",false,"[0-9]+",false);
let f92=new FieldCheckerV3MultiValue("formula_first_day",false,"[0-9]+",false);
let f93=new FieldCheckerV3MultiValue("ESR",false,"[0-9]+\\.?[0-9]*",false);
let f94=new FieldCheckerV3MultiValue("HLA",false,".+",true);
let f95=new FieldCheckerV3MultiValue("autoantibody_positive",false,".+",true);
let f96=new FieldCheckerV3MultiValue("age_seroconversion",false,"[0-9]+\\.?[0-9]*",false);
let f97=new FieldCheckerV3MultiValue("age_T1D_diagnosis",false,"[0-9]+\\.?[0-9]*",false);
let f98=new FieldCheckerV3MultiValue("disease_stage",false,"[0-9]+",false);
let f99=new FieldCheckerV3MultiValue("disease_location",false,".+",true);
let f100=new FieldCheckerV3MultiValue("calprotectin",false,"[0-9]+\\.?[0-9]*",false);
let f101=new FieldCheckerV3MultiValue("treatment",false,"no|EEN|5-ASA|aza|modulen_suppl|iron|folate|forceval|methotrexate|Lactulose|probiotic|NSAID|anthelmintics|albendazole",true);
let f102=new FieldCheckerV3MultiValue("remission",false,"no|yes",false);
let f103=new FieldCheckerV3MultiValue("wbc",false,"[0-9]+\\.?[0-9]*",false);
let f104=new FieldCheckerV3MultiValue("rbc",false,"[0-9]+\\.?[0-9]*",false);
let f105=new FieldCheckerV3MultiValue("blood_platelet",false,"[0-9]+\\.?[0-9]*",false);
let f106=new FieldCheckerV3MultiValue("hemoglobinometry",false,"[0-9]+\\.?[0-9]*",false);
let f107=new FieldCheckerV3MultiValue("ast",false,"[0-9]+\\.?[0-9]*",false);
let f108=new FieldCheckerV3MultiValue("alt",false,"[0-9]+\\.?[0-9]*",false);
let f109=new FieldCheckerV3MultiValue("globulin",false,"[0-9]+\\.?[0-9]*",false);
let f110=new FieldCheckerV3MultiValue("urea_nitrogen",false,"[0-9]+\\.?[0-9]*",false);
let f111=new FieldCheckerV3MultiValue("ASO",false,"[0-9]+\\.?[0-9]*",false);
let f112=new FieldCheckerV3MultiValue("anti_ccp_antibody",false,"[0-9]+\\.?[0-9]*",false);
let f113=new FieldCheckerV3MultiValue("rheumatoid_factor",false,"[0-9]+\\.?[0-9]*",false);
let f114=new FieldCheckerV3MultiValue("dental_sample_type",false,"teeth",false);
let f115=new FieldCheckerV3MultiValue("zigosity",false,"monozygotic|dizygotic",false);
let f116=new FieldCheckerV3MultiValue("menopausal_status",false,"pre|going_through|post",false);
let f117=new FieldCheckerV3MultiValue("BASDAI",false,"[0-9]+\\.?[0-9]*",false);
let f118=new FieldCheckerV3MultiValue("BASFI",false,"[0-9]+\\.?[0-9]*",false);
let f119=new FieldCheckerV3MultiValue("HBI",false,"[0-9]+\\.?[0-9]*",false);
let f120=new FieldCheckerV3MultiValue("SCCAI",false,"[0-9]+\\.?[0-9]*",false);
let f121=new FieldCheckerV3MultiValue("birth_weight",false,"[0-9]+\\.?[0-9]*",false);
let f122=new FieldCheckerV3MultiValue("gestational_age",false,"[0-9]+\\.?[0-9]*",false);
let f123=new FieldCheckerV3MultiValue("diet",false,"omnivore|vegan|vegetarian",false);
let f124=new FieldCheckerV3MultiValue("curator",true,"Paolo_Manghi|Valentina_Giunchiglia|Pamela_Ferretti|Marisa_Metzger|Giacomo_DAmato|Jacob_Wirbel|Arianna_Bonetti|Anna_Pedrotti|Francesca_DeFilippis",true);
let f125=new FieldCheckerV3MultiValue("uncurated_metadata",false,".+",false);
export function check(json:object):boolean{
    if (!f0.check(json)){
        return false;
    }
    if (!f1.check(json)){
        return false;
    }
    if (!f2.check(json)){
        return false;
    }
    if (!f3.check(json)){
        return false;
    }
    if (!f4.check(json)){
        return false;
    }
    if (!f5.check(json)){
        return false;
    }
    if (!f6.check(json)){
        return false;
    }
    if (!f7.check(json)){
        return false;
    }
    if (!f8.check(json)){
        return false;
    }
    if (!f9.check(json)){
        return false;
    }
    if (!f10.check(json)){
        return false;
    }
    if (!f11.check(json)){
        return false;
    }
    if (!f12.check(json)){
        return false;
    }
    if (!f13.check(json)){
        return false;
    }
    if (!f14.check(json)){
        return false;
    }
    if (!f15.check(json)){
        return false;
    }
    if (!f16.check(json)){
        return false;
    }
    if (!f17.check(json)){
        return false;
    }
    if (!f18.check(json)){
        return false;
    }
    if (!f19.check(json)){
        return false;
    }
    if (!f20.check(json)){
        return false;
    }
    if (!f21.check(json)){
        return false;
    }
    if (!f22.check(json)){
        return false;
    }
    if (!f23.check(json)){
        return false;
    }
    if (!f24.check(json)){
        return false;
    }
    if (!f25.check(json)){
        return false;
    }
    if (!f26.check(json)){
        return false;
    }
    if (!f27.check(json)){
        return false;
    }
    if (!f28.check(json)){
        return false;
    }
    if (!f29.check(json)){
        return false;
    }
    if (!f30.check(json)){
        return false;
    }
    if (!f31.check(json)){
        return false;
    }
    if (!f32.check(json)){
        return false;
    }
    if (!f33.check(json)){
        return false;
    }
    if (!f34.check(json)){
        return false;
    }
    if (!f35.check(json)){
        return false;
    }
    if (!f36.check(json)){
        return false;
    }
    if (!f37.check(json)){
        return false;
    }
    if (!f38.check(json)){
        return false;
    }
    if (!f39.check(json)){
        return false;
    }
    if (!f40.check(json)){
        return false;
    }
    if (!f41.check(json)){
        return false;
    }
    if (!f42.check(json)){
        return false;
    }
    if (!f43.check(json)){
        return false;
    }
    if (!f44.check(json)){
        return false;
    }
    if (!f45.check(json)){
        return false;
    }
    if (!f46.check(json)){
        return false;
    }
    if (!f47.check(json)){
        return false;
    }
    if (!f48.check(json)){
        return false;
    }
    if (!f49.check(json)){
        return false;
    }
    if (!f50.check(json)){
        return false;
    }
    if (!f51.check(json)){
        return false;
    }
    if (!f52.check(json)){
        return false;
    }
    if (!f53.check(json)){
        return false;
    }
    if (!f54.check(json)){
        return false;
    }
    if (!f55.check(json)){
        return false;
    }
    if (!f56.check(json)){
        return false;
    }
    if (!f57.check(json)){
        return false;
    }
    if (!f58.check(json)){
        return false;
    }
    if (!f59.check(json)){
        return false;
    }
    if (!f60.check(json)){
        return false;
    }
    if (!f61.check(json)){
        return false;
    }
    if (!f62.check(json)){
        return false;
    }
    if (!f63.check(json)){
        return false;
    }
    if (!f64.check(json)){
        return false;
    }
    if (!f65.check(json)){
        return false;
    }
    if (!f66.check(json)){
        return false;
    }
    if (!f67.check(json)){
        return false;
    }
    if (!f68.check(json)){
        return false;
    }
    if (!f69.check(json)){
        return false;
    }
    if (!f70.check(json)){
        return false;
    }
    if (!f71.check(json)){
        return false;
    }
    if (!f72.check(json)){
        return false;
    }
    if (!f73.check(json)){
        return false;
    }
    if (!f74.check(json)){
        return false;
    }
    if (!f75.check(json)){
        return false;
    }
    if (!f76.check(json)){
        return false;
    }
    if (!f77.check(json)){
        return false;
    }
    if (!f78.check(json)){
        return false;
    }
    if (!f79.check(json)){
        return false;
    }
    if (!f80.check(json)){
        return false;
    }
    if (!f81.check(json)){
        return false;
    }
    if (!f82.check(json)){
        return false;
    }
    if (!f83.check(json)){
        return false;
    }
    if (!f84.check(json)){
        return false;
    }
    if (!f85.check(json)){
        return false;
    }
    if (!f86.check(json)){
        return false;
    }
    if (!f87.check(json)){
        return false;
    }
    if (!f88.check(json)){
        return false;
    }
    if (!f89.check(json)){
        return false;
    }
    if (!f90.check(json)){
        return false;
    }
    if (!f91.check(json)){
        return false;
    }
    if (!f92.check(json)){
        return false;
    }
    if (!f93.check(json)){
        return false;
    }
    if (!f94.check(json)){
        return false;
    }
    if (!f95.check(json)){
        return false;
    }
    if (!f96.check(json)){
        return false;
    }
    if (!f97.check(json)){
        return false;
    }
    if (!f98.check(json)){
        return false;
    }
    if (!f99.check(json)){
        return false;
    }
    if (!f100.check(json)){
        return false;
    }
    if (!f101.check(json)){
        return false;
    }
    if (!f102.check(json)){
        return false;
    }
    if (!f103.check(json)){
        return false;
    }
    if (!f104.check(json)){
        return false;
    }
    if (!f105.check(json)){
        return false;
    }
    if (!f106.check(json)){
        return false;
    }
    if (!f107.check(json)){
        return false;
    }
    if (!f108.check(json)){
        return false;
    }
    if (!f109.check(json)){
        return false;
    }
    if (!f110.check(json)){
        return false;
    }
    if (!f111.check(json)){
        return false;
    }
    if (!f112.check(json)){
        return false;
    }
    if (!f113.check(json)){
        return false;
    }
    if (!f114.check(json)){
        return false;
    }
    if (!f115.check(json)){
        return false;
    }
    if (!f116.check(json)){
        return false;
    }
    if (!f117.check(json)){
        return false;
    }
    if (!f118.check(json)){
        return false;
    }
    if (!f119.check(json)){
        return false;
    }
    if (!f120.check(json)){
        return false;
    }
    if (!f121.check(json)){
        return false;
    }
    if (!f122.check(json)){
        return false;
    }
    if (!f123.check(json)){
        return false;
    }
    if (!f124.check(json)){
        return false;
    }
    if (!f125.check(json)){
        return false;
    }
    return true;
}
