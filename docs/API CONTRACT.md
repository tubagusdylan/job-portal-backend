# API Contract

## A. Tabel workers

### Get One Worker By User Id:

**Method** : "GET"

**Endpoint** : "/api/v1/workers/:user_id"

**Req.Param** : user_id

**Query**: JOIN Table with ALL TABLE that related to workers Table (Reference to ChatGPT for performance: https://chatgpt.com/share/68de21d2-a148-8007-b437-2971a1275732)

**Req.Headers** :

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get worker",
  data: {
      id,
      user_id,
      name,
      avatar_url,
      telephone,
      date_of_birth,
      gender_name,
      country_name,
      marriage_status_name,
      religion_name,
      address,
      profile_summary,
      current_salary,
      expected_salary,
      work_experiences: [{
        id,
        company_name,
        job_title,
        start_date,
        end_date,
        is_current,
        description,
        updated_at
      }],
      certifications: [{
        name,
        issuer,
        issue_date,
        expiry_date,
        credential_id,
        is_active,
        updated_at
      }],
      worker_skills: [{
        skill_id,
        skill_name,
      }],
      educations: [{
        id,
        institution_name,
        degree,
        major,
        start_date,
        end_date,
        is_current,
        description,
        updated_at
      }],
      languages: [{
        id,
        language_name,
        proficiency_level_name,
        is_primary,
      }],
      resume: [{
        id,
        resume_url,
        title,
        is_default
      }],
      portfolios: [{
        id,
        title,
        description,
        link,
        is_public
      }]
    }
  }
```

### Insert Data Worker

**Method** : "POST"

**Endpoint** : "/api/v1/workers"

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  user_id,
  name,
  avatar_url,
  telephone,
  date_of_birth,
  gender_id,
  nationality_id,
  region_id,
  marriage_status_id,
  address,
  profile_summary,
  current_salary,
  expected_salary
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert worker",
  "data": {
    id
  }
}
```

### Update Data Worker {

**Method**: "PUT"

**Endpont**: "/api/v1/workers/:id"

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  id,
  user_id,
  name,
  avatar_url,
  telephone,
  date_of_birth,
  gender_id,
  nationality_id,
  region_id,
  marriage_status_id,
  address,
  profile_summary,
  current_salary,
  expected_salary,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success update worker",
  "data": {
   id
  }
}
```

## Tabel work_experiences

### Get All Work Experiences By Worker Id

**Method**: "GET"

**Endpoint**: "/api/v1/workers/:worker_id/work-exp"

**Req.Params**: worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response** :

```json
{
  "success": true,
  "code": 200,
  "message": "Success get worker experiences",
  "data": [{
    id,
    company_name,
    job_title,
    start_date,
    end_date,
    is_current,
    description,
    updated_at
  }]
}
```

### Get One Work Exp By work exp id

**Method**: "GET"

**Endpoint**: "/api/v1/workers/:worker_id/work-exp/:id",

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get worker experience",
  "data": {
      id,
      company_name,
      job_title,
      start_date,
      end_date,
      is_current,
      description,
      updated_at
    }
}
```

### Insert One Work Experience By Worker Id

**Method**: "POST"

**Endpoint**: "/api/v1/workers/:worker_id/work-exp"

**Req.Params**: worker_id,

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  company_name,
  job_title,
  start_date,
  end_date,
  is_current,
  description,
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert worker experience",
  "data": {
    id
  }
}
```

### Update One Work Experience By Worker Experience Id

**Method**: "PUT"

**Endpoint**: "/api/v1/workers/:worker_id/worker-exp/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  company_name,
  job_title,
  start_date,
  end_date,
  is_current,
  description,
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success update worker experience",
  "data": {
    id
  }
}
```

### Delete One Work Experience By Worker Experience Id

**Method**: DELETE

**Endpoint**: "/api/v1/workers/:worker_id/worker-exp/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get worker",
  "data": "Successfully deleted"
}
```

## Tabel certifications

### Get All certifications By worker id

**Method**: "GET"

**Endpoint**: "/api/v1/workers/:worker_id/cert"

**Req.Params**: worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get certifications",
  "data": [{
    id,
    name,
    issuer,
    issue_date,
    expiry_date,
    credential_id,
    is_active,
    updated_at
  }]
}
```

### Get One certifications by worker id

**Method**: GET

**Endpoint**: "/api/v1/workers/:worker_id/cert/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get certifications",
  "data": {
    id,
    name,
    issuer,
    issue_date,
    expiry_date,
    credential_id,
    is_active,
    updated_at
  }
}
```

### Insert One certifications by worker id

**Method**: POST

**Endpoint**: "/api/v1/workers/:worker_id/cert"

**Req.Params**: worker_id

**Req.Body**:

```json
{
  name,
  issuer,
  issue_date,
  expiry_date,
  credential_id,
  is_active
}
```

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert certification",
  "data": {
    id
  }
}
```

### Update One certifications by worker id

**Method**: "PUT"

**Endpoint**: "/api/v1/workers/:worker_id/cert/:id"

**Req.Params**: worker_id, id

**Req.Body**:

```json
{
  name,
  issuer,
  issue_date,
  expiry_date,
  credential_id,
  is_active,
  updated_at
}
```

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success update certification",
  "data": {
    id
  }
}
```

### Delete One certification by worker id

**Method**: DELETE

**Endpoint**: "/api/v1/workers/:worker_id/cert/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get certifications",
  "data": "Certification successfully deleted"
}
```

## Tabel worker_skills

### Get All skill by worker id

**Method**: "GET"

**Endpoint**: "/api/v1/workers/:worker_id/skills"

**Query**: JOIN table skill_worker with skills

**Req.Params**: worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get skill worker",
  "data": [{
    skill_name
  }]
}
```

### Insert One Skill by worker id

**Method**: "POST"

**Endpoint**: "/api/v1/workers/:worker_id/skills"

**Req.Params**: worker_id

**Req.Body**:

```json
{
  skill_id
}
```

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert skill",
  "data": {
    id
  }
}
```

### Delete One Skill by worker id and skill id

**Method**: "DELETE"

**Endpoint**: "/api/v1/workers/:worker_id/skills/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Delete skill success",
  "data": "Worker skill successfully deleted"
}
```

## Tabel skills

### Get All skills

**Method**: "GET"

**Endpoint**: "/api/v1/skills?name="

**Req.Query**: name

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get skills",
  "data": [{
    id,
    skill_name,
    created_at
  }]
}
```

### Get One Skill

**Method**: "GET"

**Endpoint**: "/api/v1/skills/:id"

**Req.Params**: id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

Response:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get skill",
  "data": {
    id,
    skill_name,
    created_at
  }
}
```

### Insert One Skill

**Method**: POST

**Endpoint**: "/api/v1/skills"

**Req.Body**:

```json
{
 skill_name
}
```

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success get skill",
  "data": {
    id
  }
}
```

### Delete One Skill

**Method**: "DELETE"

**Endpoint**: "/api/v1/skills/:id"

**Req.Params**: id

**Req.Headers**:

```json
{
  "Authorization": " Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success deleted skill",
  "data": "Skill succesfully deleted"
}
```

## Tabel educations

### Get All Educations by worker id

**Method**: GET

**Endpoint**: "/api/v1/workers/:worker_id/edu"

**Req.Params**: worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get educations",
  "data": [{
    id,
    institution_name,
    degree,
    major,
    start_date,
    end_date,
    is_current,
    description,
    updated_at
  }]
}
```

### Get One Education by worker id

**Method**: "GET"

**Endpoint**: "/api/v1/workers/:worker_id/edu/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get education",
  "data": [{
    id,
    institution_name,
    degree,
    major,
    start_date,
    end_date,
    is_current,
    description,
    updated_at
  }]
}
```

### Insert one Education by worker id

**Method**: POST

**Endpoint**: "/api/v1/workers/:worker_id/edu"

**Req.Params**: worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  institution_name,
  degree,
  major,
  start_date,
  end_date,
  is_current,
  description,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert education",
  "data": {
    id
  }
}
```

### Update one Education by worker id

**Method**: PUT

**Endpoint**: "/api/v1/workers/:worker_id/edu/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  institution_name,
  degree,
  major,
  start_date,
  end_date,
  is_current,
  description,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success updated certification",
  "data": {
    id
  }
}
```

### Delete one Education by worker id

**Method**: DELETE

**Endpoint**: "/api/v1/workers/:worker_id/edu/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success delete education",
  "data": "Education successfully deleted"
}
```

## Tabel languages

### Get all languages by worker id

**Method**: GET

**Endpoint**: "/api/v1/workers/:worker_id/lang"

**Req.Params** : worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get languages",
  "data": [{
    id,
    language_name,
    proficiency_level_name,
    proficiency_level_id,
    is_primary,
    created_at,
    updated_at`
  }]
}
```

### Insert One languange by worker id

**Method**: POST

**Endpoint**: "/api/v1/workers/:worker_id/lang"

**Req.Params** : worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  language_name,
  proficiency_level_name,
  proficiency_level_id,
  is_primary,
  created_at,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success isnert certification",
  "data": {
    id
  }
}
```

### Update One languange by worker id

**Method**: PUT

**Endpoint**: "/api/v1/workers/:worker_id/lang/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  language_name,
  proficiency_level_name,
  proficiency_level_id,
  is_primary,
  created_at,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success update language",
  "data": {
    id
  }
}
```

### Delete One language by worker id

**Method**: DELETE

**Endpoint**: "/api/v1/workers/:worker_id/lang/id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get education",
  "data": "Education successfully deleted"
}
```

## Tabel resumes

### Get all resumes by worker id

**Method**: GET

**Endpoint**: "/api/v1/workers/:worker_id/resumes"

**Req.Params** : worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get resumes",
  "data": [{
    id,
    resume_url,
    title,
    is_default,
    created_at,
    updated_at
  }]
}
```

### Insert One resume by worker id

**Method**: POST

**Endpoint**: "/api/v1/workers/:worker_id/resumes"

**Req.Params** : worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  resume_url,
  title,
  is_default,
  created_at,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert resume",
  "data": {
    id
  }
}
```

### Update One resume by worker id

**Method**: PUT

**Endpoint**: "/api/v1/workers/:worker_id/resumes/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Body**:

```json
{
  resume_url,
  title,
  is_default,
  created_at,
  updated_at
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success update resume",
  "data": {
    id
  }
}
```

### Delete One resume by worker id

**Method**: DELETE

**Endpoint**: "/api/v1/workers/:worker_id/resumes/:id"

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Req.Params**: worker_id, id

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success delete resume",
  "data": "Resume successfully deleted"
}
```

## Tabel portfolios

### Get all portfolios by worker id

**Method**: GET

**Endpoint**: "/api/v1/workers/:worker_id/portfolios"

**Req.Params** : worker_id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success get portfolios",
  "data": [{
    id,
    title,
    description,
    link,
    is_public,
    updated_at
  }]
}
```

### Insert One portfolio by worker id

**Method**: POST

**Endpoint**: "/api/v1/workers/:worker_id/portfolios"

**Req.Params** : worker_id

**Req.Body**:

```json
{
  title,
  description,
  link,
  is_public,
  updated_at
}
```

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 201,
  "message": "Success insert portfolio"
  "data": {
    id
  }
}
```

### Update One portfolio by worker id

**Method**: PUT

**Endpoint**: "/api/v1/workers/:worker_id/portfolios/:id"

**Req.Params**: worker_id, id

**Req.Body**:

```json
{
  title,
  description,
  link,
  is_public,
  updated_at
}
```

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success update portfolio",
  "data": {
    id
  }
}
```

### Delete One portfolio by worker id

**Method**: DELETE

**Endpoint**: "/api/v1/workers/:worker_id/portfolios/:id"

**Req.Params**: worker_id, id

**Req.Headers**:

```json
{
  "Authorization": "Bearer {accessToken}"
}
```

**Response**:

```json
{
  "success": true,
  "code": 200,
  "message": "Success delete portfolio"
  "data": "Portfolios successfully deleted"
}
```

B. Tabel recruiters

1. Tabel job_posts
2. Tabel job_post_tags
   2.1 Tabel job_tags
3. Tabel job_post_questions
4. Tabel job_post_answer
5. Tabel job_applications
