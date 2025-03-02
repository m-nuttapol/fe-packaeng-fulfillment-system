# fe-packaeng-fulfillment-system

dotnet new webapi -n <name-service>
cd <name-service>

ulfillment-system/
│── frontend/                      # Frontend (Single Repo)
│   ├── admin-portal/               # Admin Panel (สำหรับจัดการหลังบ้าน)
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   ├── customer-app/               # Customer UI (เว็บที่คนทั่วไปใช้)
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   ├── shared-components/      


<!-- npx create-react-app frontend
cd frontend
npm install
npm start -->

<!-- docker network connect fulfillment-network fe-packaeng-fulfillment-system-frontend
docker-compose up -d --build -->


<!-- 
#list port
sudo lsof -i :3000

Eg. COMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
docker   72550  user  25u  IPv4 0x2a6e5      0t0  TCP localhost:3000 (LISTEN

#kill
sudo kill -9 72550 -->


<!-- docker restart fe-packaeng-fulfillment-system-frontend-1 -->
<!-- manual -->
<!-- docker exec -it fe-packaeng-fulfillment-system-frontend-1 sh -->
