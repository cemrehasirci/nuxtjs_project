<template>
    <div class="stitle">
        <h2>Üye Girişi</h2>
        <div class="stitleright">
            <a href="#" class="login-link">Zaten üye misiniz?</a>
            <button @click="redirectToLogin" class="login-button">Giriş Yap</button>     
        </div>
    </div>
    
    <div class="signup-container">

        <div class="signup-box">
            
            
            <form @submit.prevent="handleSignup">

                
                <div class="form-group">
                    <label for="name">Ad* :</label>
                    <input type="text" id="name" name="name" required>
                </div>
      
                <div class="form-group">
                    <label for="surname">Soyad* :</label>
                    <input type="text" id="surname" name="surname" required>
                </div>
    
                <div class="form-group">
                    <label for="country">Ülke* :</label>
                    <select id="country" name="country" required>
                        <option value="Türkiye">Türkiye</option>
                        <!-- Diğer ülkeler buraya eklenebilir -->
                    </select>
                </div>
    
                <div class="form-group">
                    <label for="city">Şehir* :</label>
                    <select id="city" name="city" required>
                        <option value="">İl Seçin</option>
                        <!-- Şehir seçenekleri buraya eklenebilir -->
                    </select>
                </div>
    
                <div class="form-group">
                    <label for="email">E-posta :</label>
                    <input type="email" id="email" name="email" v-model="email" required>
                </div>
    
                <div class="form-group">
                    <label for="password">Şifre* :</label>
                    <input type="password" id="password" name="password" v-model="password" required>
                </div>
    
                <div class="form-group">
                    <label for="password-repeat">Şifre (Tekrar)* :</label>
                    <input type="password" id="password-repeat" name="password-repeat" v-model="passwordRepeat" required>
                </div>
    
                <div class="form-group radio-group">
                    <span>Kampanya, duyuru e-postası almak istiyorum:</span>
                    <label><input type="radio" name="campaign" value="Evet"> Evet</label>
                    <label><input type="radio" name="campaign" value="Hayır" checked> Hayır</label>
                </div>
    
                <div class="form-group">
                    <label style="color: blue; font-size: 13px;">
                        <input type="checkbox" name="terms" required> Kullanıcı Sözleşmesini Kabul Ediyorum
                    </label>
                </div>
  
                <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>

                <button type="submit" class="login-button">Gönder</button>
            </form>
        </div>


    <div class="info-box">
        <div class="register-box">
          <p>Üyelik Avantajları;</p>
          <ul>
            <li>Satın almak istediğiniz ürünleri güvenli ticaret döngüsüyle rahatlıkla sipariş edebilirsiniz.</li>
            <li>Ürünlerle ilgili satıcılara mesaj göndererek bilgi alabilirsiniz.</li>
            <li>Beğendiğiniz ürünleri izlediklerinize ekleyerek daha sonra incelemek ya da sipariş etmek üzere saklayabilirsiniz.</li>
            <li>İlginizi çeken kategorileri ve satıcıları favorilerinize ekleyebilir, favori kelimeler oluşturabilirsiniz. Favorilerinizle ilgili ürünler siteye eklendiğinde bilgi maili alabilirsiniz.</li>
          </ul>
        </div>
    </div>
  

    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

// Router'ı al
const router = useRouter();

// Yönlendirme fonksiyonu
function redirectToLogin(): void {
    router.push('/login'); // Nuxt.js login rotasına yönlendirme
}


import { ref } from 'vue';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from 'firebase/auth'; // Firebase yapılandırma dosyanızın yolu
import { useNuxtApp } from 'nuxt/app'; // Nuxt App için

const { $firebaseAuth } = useNuxtApp(); // Firebase Auth modülüne erişim


// Form verileri
const email = ref('');
const password = ref('');
const passwordRepeat = ref('');

// Hata mesajı
const errorMessage = ref('');

// Kayıt olma fonksiyonu
async function handleSignup() {
  if (password.value !== passwordRepeat.value) {
    errorMessage.value = "Şifreler eşleşmiyor.";
    return;
  }

  try {
    // Firebase Auth kullanarak yeni bir kullanıcı oluştur
    await $firebaseAuth.createUserWithEmailAndPassword(email.value, password.value);
    router.push('/'); // Kayıt başarılıysa ana sayfaya yönlendir
  } catch (error: any) {
    errorMessage.value = error.message || "Bir hata oluştu.";
  }
}


















</script>
  
<style scoped>

.stitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.stitleright {
    display: flex;
    gap: 10px;
    margin-left: auto; /* Sağ tarafa hizalama */
    align-items: center;
}
.stitleright a {
    text-decoration: none;
    color: #931818;
    font-size: 14px;
}

.stitleright button {
    background-color: #931818;
    color: white;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
}


.signup-container {
        display: flex;
        gap: 40px;
        margin: 20px 0px;
        padding: 20px 20px;
        border: 1px solid #eee4cd;
        background-color: #fff;
        height: 900px;
    }

    .signup-box {
        flex: 1;
        max-width: 40%;
    }
  
    .info-box {
        display: flex;
        width: 60%;
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
      width: 100%;
      padding: 10px;
      border: 1px #ccc;
      border-radius: 5px;
    }
    
    select,
    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 300px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
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


</style>
  