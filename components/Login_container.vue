<template>
    <h2>Üye Girişi</h2>
    <div class="login-container">
        <div class="login-box">
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="eposta"
                required
              />
            </div>
  
          <div class="form-group">
            <label for="password">Şifre</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Şifre"
              required
            />
          </div>
  
          <div class="form-options">
            <label>
              <input type="checkbox" v-model="rememberMe" />
              Beni Hatırla
            </label>
            <a href="#" class="forgot-password">Şifremi Unuttum</a>
          </div>
  
          <button type="submit" class="login-button">Giriş</button>
        </form>
      </div>


      <div class="info-box">
        <div class="register-box">
          <p>Üye değil misiniz?</p>
          <button @click="redirectToLogin" class="login-button">Üye Olun</button>
          <p>Üyelik Avantajları;</p>
          <ul>
            <li>Güvenli ticaret döngüsü</li>
            <li>Satıcılara mesaj gönderme</li>
            <li>İzleme listesine kitap ekleme</li>
            <li>Sepetinizde kitap saklama</li>
            <li>Favori kelimeler belirleme</li>
          </ul>
        </div>
      </div>
  

    </div>
</template>
  
<script setup lang="ts">

import { useRouter } from 'vue-router';
// Router'ı al
const router = useRouter();
// Yönlendirme fonksiyonu
function redirectToLogin(): void {
    router.push('/signup');
}




import { defineComponent, ref } from "vue";
import { useNuxtApp } from "nuxt/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export default {

}


//*************************************************************** */

// Reaktif değişkenler
const email = ref<string>(""); 
const password = ref<string>(""); 
const rememberMe = ref<boolean>(false); 

// Giriş işlemi için fonksiyon
const handleLogin = async (): Promise<void> => {
  const { $auth } = useNuxtApp();

  try {
    // Firebase kimlik doğrulama
    const userCredential = await signInWithEmailAndPassword(
      $auth,
      email.value,
      password.value
    );

    const user = userCredential.user; // Kullanıcı bilgisi
    console.log("Giriş başarılı:", user);

    // Kullanıcıyı hatırlama işlemi
    /*
    if (rememberMe.value) {
      localStorage.setItem("user", JSON.stringify(user));
      console.log("Kullanıcı bilgisi localStorage'a kaydedildi.");
    } else {
      sessionStorage.setItem("user", JSON.stringify(user));
      console.log("Kullanıcı bilgisi sessionStorage'a kaydedildi.");
    }
    */

    alert("Başarılı giriş! Ana sayfaya yönlendiriliyorsunuz.");
    // Örneğin bir yönlendirme
    window.location.href = "/index.vue";
  } catch (error) {
    console.error("Giriş başarısız:", error);
    alert("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
  }
};
</script>


  
<style scoped>

    .login-container {
        display: flex;
        gap: 40px;
        margin: 20px 0px;
        padding: 20px 20px;
        border: 1px solid #eee4cd;
        background-color: #fff;
    }

    .login-box {
        flex: 1;
        max-width: 40%;
    }
  
    .info-box {
        display: flex;
        width: 40%;
        margin-left: auto;
        flex-direction: column; 
        justify-content: flex-start;
    }

    p {
        margin-bottom: 10px;
        font-weight: bold;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
  
    .login-button,
    .register-button {
        background-color: #931818;
        color: white;
        border: none;
        cursor: pointer;
        width: 100%;
        padding: 10px 20px;
        margin-bottom: 20px;
    }
    
    .login-button:hover,
    .register-button:hover {
        background-color: #b22222;
    }
    
    .register-box {
        margin-bottom: 20px;
    }
    
    .register-box ul {
      list-style-type: disc;
      padding-left: 20px;
    }
    
    .register-box li {
        margin-bottom: 10px;
        font-size: 14px;
        color: rgb(93, 96, 96);
    }
    
    .forgot-password {
      color: #0056b3;
      text-decoration: none;
      font-size: 0.9em;
    }
    
    .forgot-password:hover {
      text-decoration: underline;
    }

</style>
  