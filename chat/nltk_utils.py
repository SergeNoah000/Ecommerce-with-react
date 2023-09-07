import numpy as np
import nltk
from nltk.tokenize import RegexpTokenizer
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords

#from nltk.stem.porter import PorterStemmer
#stemmer = PorterStemmer()


#nltk.dowload('punkt')
#nltk.download('stopwords')
#nltk.download('wordnet')

def tokenize(sentence):
    tokenizer=RegexpTokenizer(r'\w+')

    sentence=tokenizer.tokenize(sentence)
    sentence=[lemmatize(w) for w in sentence if not w in set(stopwords.words(['english', 'french']))]
    #sentence=' '.join(sentence)
    return sentence

def lemmatize(word):
    lemmatizer=WordNetLemmatizer()
    return lemmatizer.lemmatize(word.lower())

def bag_of_words(tokenized_sentence, words):
    """
    return bag of words array:
    1 for each known word that exists in the sentence, 0 otherwise
    example:
    sentence = ["hello", "how", "are", "you"]
    words = ["hi", "hello", "I", "you", "bye", "thank", "cool"]
    bog   = [  0 ,    1 ,    0 ,   1 ,    0 ,    0 ,      0]
    """
    # stem each word
    #sentence_words = [lemmatize(word) for word in tokenized_sentence]
    # initialize bag with 0 for each word
    bag = np.zeros(len(words), dtype=np.float32)
    for idx, w in enumerate(words):
        if w in tokenized_sentence:
            bag[idx] = 1

    return bag