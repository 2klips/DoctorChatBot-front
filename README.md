# 의사소통 프로젝트

# 진행중


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

   ![의사소통](https://github.com/user-attachments/assets/4f6eaf37-b0b3-43a5-8e5d-82d95bbd3703)

   ![의사소통 (2)](https://github.com/user-attachments/assets/faddb65f-c362-4b7e-bb2c-ec0c5867a701)

   ![의사소통 (3)](https://github.com/user-attachments/assets/ef8c3379-804f-4180-bb54-0e37774f239a)

   ![의사소통 (4)](https://github.com/user-attachments/assets/cfe74dd2-e34f-479c-883d-3e3733b6aa91)

   ![의사소통 (5)](https://github.com/user-attachments/assets/dadf8cc2-8f42-4f2c-a253-fe62179ea7f4)

   ![의사소통 (6)](https://github.com/user-attachments/assets/db835f24-9420-497e-a2ec-e8806245f951)

   ![의사소통 (7)](https://github.com/user-attachments/assets/7b0b52fe-5042-4575-b3eb-78736045cc60)

</details>

# ERD

+------------+     +-----------+     +-----------+     +--------+
|  사용자    |<--> | 프론트엔드 |<--> |  백엔드    |<--> |  모델  |
+------------+     +-----------+     +-----------+     +--------+
       ^                  ^                ^                 ^
       |                  |                |                 |
       |                  |                |                 |
       |                  |                |                 |
       |                  |                |                 |
message: input       POST 요청         req: model_input 응답 생성
       |        body: {message,        model_input:           |
       |               history}        {message, history}      |
       |                  |                |                 |
       |                  |                |                 |
       +------------------+----------------+-----------------+

### 상세 흐름
1. 사용자는 프론트엔드에 메시지(input)를 보냅니다.
2. 프론트엔드는 POST 요청을 백엔드로 보냅니다. (body: {message: string, history: string[]})
3. 백엔드는 요청을 받아 모델에게 입력 데이터를 전달합니다. (model_input: {message, history})
4. 모델은 응답을 생성합니다.
5. 백엔드는 모델의 출력을 받아 프론트엔드로 응답합니다. (response: model_output)
6. 프론트엔드는 응답을 받아 사용자에게 표시합니다.