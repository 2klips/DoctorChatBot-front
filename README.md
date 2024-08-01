# 의사소통 프로젝트

# 소개: 의료상담 챗봇 프로젝트

### 개요

의사소통 의료상담 챗봇은 바쁜 일상 속에서 병원을 방문할 시간이 없거나 어느 병원에 가야 할지 고민하는 사용자들을 위해 설계된 헬스케어 솔루션입니다. GPT-NeoX 기반의 Polygloy-ko 모델을 활용하여, 
사용자의 증상을 분석하고 의심되는 질병을 추정하며, 적합한 병원을 추천하고 간단한 대처 방법을 제공합니다.

### 주요 기능

* 증상 분석 및 진단: 사용자가 입력한 증상을 바탕으로 GPT-NeoX 모델의 강력한 자연어 처리 능력을 활용하여 가능한 질병을 추정합니다.
* 병원 추천: 사용자가 겪고 있는 증상에 따라 적합한 전문 병원이나 클리닉을 추천해 줍니다.
* 대처 방법 안내: 병원 방문 전까지 필요한 간단한 대처 방법이나 응급 처치 방법을 제공합니다.
* 사용자 친화적 인터페이스: 직관적이고 사용하기 쉬운 인터페이스를 통해 누구나 쉽게 상담을 받을 수 있습니다.

### 특징

* 신속한 상담: 병원 방문이 어려운 상황에서 빠르게 건강 상담을 받을 수 있습니다.
* 맞춤형 추천: 사용자의 증상에 맞는 병원과 대처 방법을 개인 맞춤형으로 제공합니다.
* 언제 어디서나 사용 가능: 모바일 및 웹 플랫폼을 통해 언제 어디서나 쉽게 접근할 수 있습니다.


### 사용 예시:

1. 사용자가 챗봇에 "머리가 아프고 열이 나요"라고 입력합니다.
2. 챗봇은 증상을 분석하여 "감기, 독감, 편두통" 등의 가능한 원인을 제시합니다.
3. 챗봇은 사용자에게 가까운 내과 또는 이비인후과 병원을 추천하고, 집에서 할 수 있는 간단한 대처 방법(예: 물 많이 마시기, 휴식 취하기)을 안내합니다.

### 사용

* 프론트엔드

```bash
# 깃 클론
git clone https://github.com/Songysp/DoctorChat_frontend

# 프로젝트 루트 폴더에서 아래 실행(패키지 설치)
npm install

# 실행(android studio, expo cli 필요
npx expo start
```
* 백엔드

```bash
# 깃 클론
git clone https://github.com/Songysp/DoctorChat_BackEnd

# 프로젝트 루트 폴더에서 아래 실행(패키지 설치)
pip install -r requirements.txt

# 실행
uvicorn app:app --host 0.0.0.0 --port 8000 --reload

```

# 서비스 구동 화면

<details>
   <summary>보기/접기</summary>

   ![구동화면](https://github.com/user-attachments/assets/d6fff24e-b604-46bc-a33f-3fd646d86ebd)

   
</details>



# 모델 선정 기준

1. **대규모 파라미터 수:**

   5.8억 개의 파라미터를 가지고 있어, 다양한 의료 데이터에 대해 높은 성능을 보일 수 있습니다.

3. **의료 특화:**

   의료 문서, 논문, 임상 기록 등의 데이터를 학습해 의료 분야에 특화되어 있어 전문적인 의료 상담이나 정보 제공에 적합합니다.
   
4. **한국어 최적화:**

   한국어 데이터로 학습되었기 때문에, 한국어 텍스트 처리에 강점을 보입니다.

5. **고품질 데이터 학습:**

   MedText와 ChatDoctor 데이터셋을 GPT3.5를 통해 한국어 대화로 변환시켜 학습되었습니다.
   이는 모델의 답변 정확도와 신뢰성을 높이는 데 기여합니다.


# 포트폴리오
<details>
   <summary>펼치기/접기</summary>

   ![의사소통 (1)](https://github.com/user-attachments/assets/14abe2b2-8871-495f-98b9-eba171cef34b)
   
   ![의사소통 (2)](https://github.com/user-attachments/assets/05739574-868e-46bb-b019-8a1879dbb710)
   
   ![의사소통 (3)](https://github.com/user-attachments/assets/1d09799e-45ce-480a-bac2-b509f768de38)
   
   ![의사소통 (4)](https://github.com/user-attachments/assets/fe393326-5353-47a7-bf1b-fdab4c2f894d)
   
   ![의사소통 (5)](https://github.com/user-attachments/assets/3d40fee4-f488-45f9-ae30-035e9b9902fc)
   
   ![의사소통 (6)](https://github.com/user-attachments/assets/3ff4bca7-e176-44b9-8da2-889dd9851687)
   
   ![의사소통 (7)](https://github.com/user-attachments/assets/aadb145b-3797-4253-a243-29768c09229b)
   
   ![의사소통 (8)](https://github.com/user-attachments/assets/4ebea7bc-776d-4df5-b713-540b48fc54a0)
   
   ![의사소통 (9)](https://github.com/user-attachments/assets/7370276e-69e8-40f8-bbd1-96634bcf9dca)
   
   ![의사소통 (10)](https://github.com/user-attachments/assets/fa01b34a-bca6-4077-98f8-fa18b3003b2a)
   
   ![의사소통 (11)](https://github.com/user-attachments/assets/eb77c992-66af-4404-b482-70ad18b6afd8)


</details>


