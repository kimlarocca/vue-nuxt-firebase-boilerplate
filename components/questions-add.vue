<template>
  <section class="bg-white padding-3">

      <h3 class="margin-bottom-1">Add a new question:</h3>

      <div class="cell large-auto">
        <form id="form" @submit.prevent="addQuestion">
          <label for="questionName" class="hide-ally-element">Question</label>
          <input class="margin-bottom-1" id="questionName" v-model="newQuestion.name" type="text">
          <label class="margin-bottom-1" for="challenge">
              <input type="checkbox" id="challenge" value="true" v-model="newQuestion.challenge"> Is the question a challenge if answered yes?
          </label>
          <button>add question</button>
        </form>
      </div>

  </section>
</template>


<script>
    import {questionsCollection} from '../plugins/firebase'

    export default {
        data() {
            return {
                newQuestion: {
                    name: '',
                    challenge: false
                }
            }
        },

        methods: {
            addQuestion: function () {
                questionsCollection.add(this.newQuestion);
                this.newQuestion.name = '';
                this.newQuestion.challenge = false;
            },
        },
    }
</script>

<style scoped lang="scss">

</style>
