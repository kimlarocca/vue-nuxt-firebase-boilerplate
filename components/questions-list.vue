<template>
    <section>
        <div class="container">
            <h2 class="margin-bottom-2">Questions:</h2>
            <table>
                <thead>
                <tr>
                    <th>Question</th>
                    <th>Challenge?</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(question, index) in questions" :key="index">
                    <td>
                        <label @click="editQuestion(question)" v-if="currentlyEditing !== question.id">
                            {{question.name}}
                        </label>
                        <form v-else>
                            <label>
                                <input v-model="questionEditText" class="margin-right-1 float-left margin-bottom-0"
                                       type="text">
                            </label>
                            <button @click.prevent="updateQuestionText" type="submit">Save</button>
                            <button @click.prevent="closeEditableAreas" type="submit">X</button>
                        </form>
                    </td>
                    <td style="min-width: 150px">
                        <label @click="editChallenge(question)" v-if="challengeCurrentlyEditing !== question.id">
                            {{ question.challenge==='true' ? 'yes' : 'no' }}
                        </label>
                        <form v-else>
                            <label>
                                <select v-model="selected"
                                        class="margin-right-1 float-left margin-bottom-0 boolean-select"
                                        type="boolean">
                                    <option disabled value="true">{{ question.challenge==='true' ? 'current answer: yes'
                                        :
                                        'current answer: no' }}
                                    </option>
                                    <option value="true">yes</option>
                                    <option value="false">no</option>
                                </select>
                            </label>
                            <button @click.prevent="updateChallengeText" type="submit">Save</button>
                            <button @click.prevent="closeEditableAreas" type="submit">X</button>
                        </form>

                    </td>
                    <td class="text-right">
                        <a @click="deleteQuestion(question.id)"><i class="fas fa-trash"></i></a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
    import {questionsCollection} from '../plugins/firebase'

    export default {
        data () {
            return {
                questions: [],
                currentlyEditing: null,
                questionEditText: '',
                challengeCurrentlyEditing: null
            }
        },

        firestore: {
            questions: questionsCollection
        },

        methods: {
            deleteQuestion (id) {
                questionsCollection.doc(id).delete();
            },
            editQuestion (question) {
                this.currentlyEditing = question.id;
                this.questionEditText = question.name;
            },
            updateQuestionText () {
                questionsCollection.doc(this.currentlyEditing).update({name: this.questionEditText}).then(() => {
                    console.log('question updated')
                });
                this.currentlyEditing = null;
                this.questionEditText = '';
            },
            editChallenge (question) {
                this.challengeCurrentlyEditing = question.id;
            },
            updateChallengeText () {
                questionsCollection.doc(this.challengeCurrentlyEditing).update({challenge: this.selected}).then(() => {
                    console.log('challenge updated')
                });
                this.challengeCurrentlyEditing = null;
            },
            closeEditableAreas () {
                this.currentlyEditing = null;
                this.challengeCurrentlyEditing = null;
            }
        },
    }
</script>
