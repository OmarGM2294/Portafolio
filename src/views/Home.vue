<template>
  <div class="home">
    <h1 class="home__heading">
      Omar Gonzalez Portfolio [V2.0]
    </h1>
    <div class="home__template">
      me@omargm2294:~$
      <p>
        ls -a<b>|</b>
      </p>  
    </div>
    <div class="home__result">
      <p>
        <span class="home__result--flex">
          <span>about</span>
          <span>22/02/1994 12:00 p.m</span>
        </span>
        <span class="home__result--flex">
          <span>skills</span>
          <span>10/12/1996 12:00 p.m</span>
        </span>
        <span class="home__result--flex">
          <span>experience</span>
          <span>06/02/2015 11:00 a.m</span>
        </span>
        <span class="home__result--flex">
          <span>contact</span>
          <span>04/12/2010 08:00 a.m</span>
        </span>
        <span>4 file(s) 1,301,926,830 bytes</span>
        ================================================<br>
        To execute a command, type "./"<br>
        follow by the name of the command<br>
        Example: ./about_me<br>
        <!--Options: --windowed<br>-->
        ================================================
      </p>
    </div>
    <Input @input_key="choise" />
    <div ref="container">
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import About from '@/components/About';
import Error from '@/components/Error';
import Input from '@/components/Input';

export default {
  name: 'Home',
  data() {
    return {
      children: [],
      history: [],
      cont: 0
    }
  },
  methods: {
    choise(e) {
      if(e.keyCode == 13) {
        this.process_text(e)
      }
    },
    process_text(e) {
      e.target.disabled = true;
      this.history.push(e.target.value);
      this.cont = this.cont + 1;
      let parameter = e.target.value.split(' ');
      if (parameter[0] === './about') {
        this.generate_comp(About, {});
      } else if(parameter[0].match(/.\/(experience|skills|contact)/g)) {
        let option = this.capitalize(parameter[0].replace(/.\//g, ''));
        let routeData = this.$router.resolve({name: option});
        window.open(routeData.href, '_blank');
      } else {
        this.generate_comp(Error, {
          propsData: {
            msg: parameter[0]
          }
        })
      }
      this.generate_comp(Input, {}, true)
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    generate_comp(cmp_class, data, on = false) {
      let ComponentClass = Vue.extend(cmp_class);
      let instance = new ComponentClass(data);
      if (on) {
        instance.$on('input_key', e => {
          this.choise(e);
        })
      }
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
      if (cmp_class == Input)
        instance.set_focus();
    },
    history_change(e) {
      let inputs = document.querySelectorAll('.home__user');
      let input = inputs[inputs.length-1].children[0];
      if(e.keyCode == 38) {
        if(this.cont > 0) {
          this.cont--;
          input.value = this.history[this.cont];
        }
      }else if(e.which == 40){
        if(this.cont < this.history.length){
          input.value = this.history[this.cont++];
        }else if(this.cont == this.history.length){
          input.value = "";
        }
      }
    }
  },
  created() {
    window.addEventListener('keydown',this.history_change);
  },
  destroyed: function() {
    window.removeEventListener('keydown', this.history_change);
  },
  components: {
    Input
  }
}
</script>
